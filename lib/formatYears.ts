export const formatYears = (years: string) => {
    const yearParts2016 = ["2016.1", "2016.2", "2016.3"];
    const yearLabels: Record<string, string> = {
      "2016.1": "2016 Spring",
      "2016.2": "2016 SR",
      "2016.3": "2016 SP",
    };
  
    // Dividir años en un array
    const yearsArray = years.split(", ").map((year) => {
      return yearParts2016.includes(year) ? year : Number(year);
    });
  
    // Si todas las partes de 2016 están presentes, consolidar como "2016"
    const hasAll2016Parts = yearParts2016.every((part) => yearsArray.includes(part));
    let consolidatedYears = hasAll2016Parts
      ? yearsArray.filter((year) => !yearParts2016.includes(year as string)).concat(2016)
      : yearsArray;
  
    // Eliminar duplicados y ordenar
    consolidatedYears = Array.from(new Set(consolidatedYears)).sort((a, b) => (typeof a === "number" && typeof b === "number" ? a - b : 0));
  
    // Agrupar años consecutivos
    const ranges = [];
    let start = consolidatedYears[0];
    let end = consolidatedYears[0];
  
    for (let i = 1; i < consolidatedYears.length; i++) {
      if (
        typeof start === "number" &&
        typeof end === "number" &&
        typeof consolidatedYears[i] === "number" &&
        consolidatedYears[i] === end + 1
      ) {
        end = consolidatedYears[i];
      } else {
        // Añadir rango o año individual
        if (typeof start === "number" && typeof end === "number") {
          ranges.push(start === end ? `${start}` : `${start}-${end}`);
        } else if (yearParts2016.includes(start as string)) {
          ranges.push(yearLabels[start as string]);
        }
        start = consolidatedYears[i];
        end = consolidatedYears[i];
      }
    }
    // Añadir el último rango
    if (typeof start === "number" && typeof end === "number") {
      ranges.push(start === end ? `${start}` : `${start}-${end}`);
    } else if (yearParts2016.includes(start as string)) {
      ranges.push(yearLabels[start as string]);
    }
  
    return ranges.join(" | ");
  };