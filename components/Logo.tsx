import { JSX } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const Logo = (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<Svg> & Pick<Readonly<SvgProps>, "color" | "font" | "children" | "id" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "style" | "testID" | "nativeID" | "disabled" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-modal" | "role" | "accessibilityLabelledBy" | "aria-labelledby" | "accessibilityLiveRegion" | "aria-live" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "opacity" | "pointerEvents" | "height" | "width" | "transform" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "fill" | "scale" | "skewX" | "skewY" | "title" | "clipPath" | "marker" | "mask" | "viewBox" | "fillOpacity" | "fillRule" | "stroke" | "strokeWidth" | "strokeOpacity" | "strokeDasharray" | "strokeDashoffset" | "strokeLinecap" | "strokeLinejoin" | "strokeMiterlimit" | "vectorEffect" | "clipRule" | "translate" | "origin" | "originX" | "originY" | "skew" | "x" | "y" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "delayPressIn" | "delayPressOut" | "delayLongPress" | "markerStart" | "markerMid" | "markerEnd" | "fontStyle" | "fontVariant" | "fontWeight" | "fontStretch" | "fontSize" | "fontFamily" | "textAnchor" | "textDecoration" | "letterSpacing" | "wordSpacing" | "kerning" | "fontFeatureSettings" | "fontVariantLigatures" | "fontVariationSettings" | "hitSlop" | "needsOffscreenAlphaCompositing" | "removeClippedSubviews" | "collapsable" | "renderToHardwareTextureAndroid" | "focusable" | "tabIndex" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture"> & { readonly preserveAspectRatio?: string | undefined; } & {}) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={200} height={60} {...props} viewBox="0 0 138 43" fill="none">
    <Path
    d="M35.1561 21.7063C34.1396 20.8094 33.2947 19.7349 32.6629 18.5354C32.2267 17.4275 31.9024 16.2788 31.6949 15.1064C32.3868 14.6441 33.0434 14.1311 33.6594 13.5716C34.3577 12.8796 34.9901 12.1242 35.5485 11.3151C35.5485 11.3151 33.2216 11.0292 31.5453 10.7688C30.4189 10.6067 29.3338 10.2313 28.348 9.66297C28.4921 9.10947 28.5516 8.53738 28.5247 7.96607C28.528 6.88542 28.3431 5.81245 27.9784 4.79519C27.4978 3.32498 26.633 2.00996 25.4734 0.986317C24.9549 0.542444 24.3527 0.207058 23.7024 0C23.7024 0 23.1495 1.22171 22.7227 1.96677C22.2985 2.76229 21.7125 3.46022 21.0023 4.01567C20.3963 4.43135 19.7185 4.7312 19.0033 4.90005C18.2867 4.73649 17.6085 4.4362 17.0057 4.01567C16.2966 3.45921 15.7107 2.7615 15.2853 1.96677C14.8659 1.22171 14.3093 0 14.3093 0C13.6594 0.207438 13.0577 0.543069 12.5398 0.98705C11.3785 2.00975 10.5124 3.32499 10.0318 4.79592C9.66783 5.81336 9.48298 6.88621 9.48551 7.9668C9.4599 8.54036 9.52147 9.11448 9.6681 9.66957C8.68202 10.2374 7.59701 10.6127 6.47082 10.7754C4.79519 11.035 2.46909 11.3217 2.46909 11.3217C3.02986 12.1288 3.66182 12.8839 4.35739 13.5782C4.97275 14.1371 5.62867 14.6496 6.31976 15.1115C6.11189 16.2828 5.78813 17.4304 5.35324 18.5376C4.72118 19.7363 3.87633 20.81 2.85995 21.7063C1.9565 22.4316 0 23.8476 0 23.8476C0 23.8476 1.96897 27.1475 3.00148 28.5871C3.759 29.6284 6.56249 33.1395 8.00493 34.6736C9.44738 36.2077 12.0338 38.5331 13.4374 39.7592C14.7948 40.9421 18.7437 43.8152 18.9996 44H19.0128C19.2658 43.8152 23.214 40.9421 24.5751 39.7592C25.9794 38.5434 28.5651 36.2114 30.0075 34.6736C31.4499 33.1358 34.2608 29.6335 35.0109 28.5871C36.0435 27.1497 38.0124 23.8476 38.0124 23.8476C38.0124 23.8476 36.0559 22.4316 35.1561 21.7063ZM5.54904 12.3198C6.69995 12.2337 7.84261 12.0599 8.96705 11.7999C9.74719 11.5655 10.4912 11.2244 11.178 10.7864C11.8168 11.7746 12.5478 12.7 13.3611 13.5503C14.0462 14.2119 14.7949 14.8044 15.5963 15.3191C15.5963 15.3191 13.6603 13.1367 13.114 12.2787C12.6504 11.5633 12.2628 10.8014 11.9575 10.0054C11.6752 9.31496 11.4863 8.58991 11.3958 7.84947C11.3408 7.20999 11.3851 6.56584 11.5271 5.9399C11.6964 5.12752 12.009 4.35177 12.4503 3.64901C12.6644 3.27817 12.9623 2.96252 13.32 2.72722C13.537 3.11503 13.7847 3.48483 14.0607 3.83307C14.4011 4.22887 14.7707 4.59853 15.1665 4.93892C14.9107 5.26276 14.6936 5.61544 14.5198 5.98977C14.2726 6.61859 14.1845 7.29868 14.2631 7.96973C14.3329 8.49199 14.4558 9.00576 14.6298 9.50311C15.0427 9.34813 15.4387 9.15157 15.8119 8.91645C16.3625 8.57083 16.8894 8.1889 17.3892 7.7732C18.2414 7.08462 19.0157 6.41363 19.0157 6.41363C19.0157 6.41363 19.7821 7.09048 20.6401 7.77907C21.1408 8.19229 21.6685 8.57177 22.2196 8.91498C22.593 9.1502 22.9893 9.34676 23.4025 9.50164C23.5768 9.00439 23.6996 8.49058 23.7691 7.96827C23.8461 7.29842 23.7569 6.61993 23.5095 5.9927C23.3346 5.61789 23.1165 5.26474 22.8598 4.94038C23.2555 4.59963 23.625 4.22947 23.9649 3.83307C24.241 3.48483 24.4886 3.11503 24.7056 2.72722C25.063 2.96293 25.3607 3.2785 25.5753 3.64901C26.0166 4.35177 26.3292 5.12752 26.4986 5.9399C26.6402 6.5669 26.6837 7.21206 26.6276 7.8524C26.538 8.59333 26.3503 9.31907 26.0696 10.0106C25.7643 10.8065 25.3767 11.5684 24.9131 12.2839C24.3668 13.1418 22.4308 15.3242 22.4308 15.3242C23.2321 14.8097 23.9805 14.2172 24.6653 13.5554C25.4773 12.704 26.2082 11.7787 26.8483 10.7916C27.5353 11.2293 28.2793 11.5703 29.0593 11.805C30.1834 12.0654 31.3259 12.2393 32.4766 12.3249C31.9455 12.747 31.3753 13.1173 30.7738 13.4308C29.8117 13.925 27.1255 14.9253 25.8877 15.421C24.8312 15.839 23.8173 16.3574 22.8598 16.9691C21.9236 17.5585 21.0403 18.2281 20.2199 18.9703C19.7816 19.4087 19.3781 19.8804 19.0128 20.3812C18.6464 19.8792 18.2424 19.4059 17.8043 18.9652C16.984 18.2228 16.1007 17.5532 15.1643 16.9639C14.207 16.352 13.193 15.8336 12.1365 15.4159C10.903 14.9216 8.21173 13.9214 7.25034 13.4256C6.64848 13.1138 6.07759 12.7455 5.54537 12.3257L5.54904 12.3198ZM22.6516 28.2871C22.9444 27.8501 23.2137 27.3978 23.4582 26.932C23.4582 26.932 24.3551 26.6797 24.9527 26.5242C25.4456 26.3811 25.9277 26.203 26.3952 25.9911C25.8456 27.3113 25.1664 28.5736 24.3675 29.7596C23.6184 30.8641 22.7367 31.8726 21.7422 32.7626C20.9671 33.4133 20.1417 34.0018 19.2739 34.5226V23.7999C19.7309 23.7787 20.1863 23.7315 20.6379 23.6584C21.4826 23.5279 22.3802 23.2917 22.3802 23.2917C22.3802 23.2917 22.029 24.1241 21.8207 24.6308C21.6124 25.1375 21.2744 25.931 21.2744 25.931C21.2744 25.931 21.795 25.271 22.0546 24.8772C22.3142 24.4834 23.1201 23.0189 23.1201 23.0189C23.433 22.8739 23.7365 22.7093 24.0287 22.5262C24.286 22.3513 24.5178 22.1415 24.7173 21.9028C24.9499 21.5448 25.1294 21.1551 25.2504 20.7457C25.346 20.3543 25.3952 19.9531 25.3971 19.5503C25.3971 19.5503 25.0972 19.6926 24.864 19.8099C24.6308 19.9273 24.3829 20.0827 24.3829 20.0827C24.3829 20.0827 24.6161 19.4594 24.7335 19.0421C24.8508 18.6249 25.2409 17.4501 25.2409 17.4501C25.2409 17.4501 24.7599 18.457 24.5809 18.7958C24.402 19.1345 23.9444 19.9522 23.8535 20.0959C23.7625 20.2397 23.4377 20.6672 23.4377 20.6672C23.4377 20.6672 22.9302 21.0177 22.631 21.2384L21.9424 21.7444V22.5636C21.5286 22.723 21.1026 22.849 20.6687 22.9405C19.9962 23.0512 19.2915 23.1216 19.2915 23.1216L19.2783 21.0998C19.6782 20.6239 20.1091 20.1749 20.5682 19.7557C21.266 19.1055 22.0085 18.5049 22.7901 17.9583C23.4813 17.4588 24.2223 17.0319 25.0011 16.6845C25.8855 16.2819 27.6543 15.5926 27.6543 15.5926C27.6543 15.5926 27.6807 17.2565 27.6022 19.0495C27.5692 20.4516 27.439 21.8497 27.2128 23.2338C27.0053 24.3514 26.797 25.0532 26.797 25.0532C26.797 25.0532 25.8217 25.4433 24.9124 25.7286C23.8535 26.06 21.7672 26.4304 21.7672 26.4304L21.685 29.415C21.685 29.415 22.3494 28.689 22.6516 28.2871ZM13.1785 21.3206C13.2506 22.5279 13.4419 23.7251 13.7498 24.8948C14.0525 25.9237 14.5174 26.8978 15.1269 27.7804C15.4981 28.338 15.8973 28.8765 16.323 29.3937L16.2577 26.3922C16.2577 26.3922 15.9065 26.25 15.5171 26.1194C15.1894 26.0123 14.8682 25.8865 14.555 25.7425C14.3129 25.1545 14.1256 24.5455 13.9954 23.9231C13.8605 23.2301 13.7234 22.2724 13.7234 22.2724C14.6697 22.753 15.6623 23.1363 16.686 23.4164C17.3633 23.5783 18.0487 23.7041 18.7393 23.7933V28.8613C18.7393 30.4746 18.7261 34.5079 18.7261 34.5079C17.7513 33.867 16.8273 33.1521 15.9622 32.3695C14.7478 31.1832 13.691 29.8456 12.8177 28.3898C11.9347 26.9972 11.3092 25.4572 10.9712 23.8432C10.7445 22.4705 10.6244 21.0824 10.6119 19.6911C10.5166 17.7288 10.5334 15.6755 10.5334 15.6755C10.5334 15.6755 11.8079 16.1301 13.3281 16.8708C14.6448 17.5027 15.8717 18.3069 16.9764 19.2621C17.6463 19.7859 18.2332 20.408 18.7173 21.1072L18.7569 23.1216C18.2945 23.0831 17.8347 23.0182 17.3797 22.9273C16.9751 22.8318 16.5779 22.7075 16.191 22.5555L16.114 21.7063C15.6251 21.2515 15.1133 20.8219 14.5806 20.4193C13.8209 19.8598 13.0216 19.3802 13.0216 19.3802C13.0216 19.3802 13.0993 20.3233 13.1778 21.3235L13.1785 21.3206ZM33.1534 28.3253C32.0615 29.7809 31.0891 30.9784 30.0735 32.1209C29.085 33.2268 27.7342 34.5893 27.7342 34.5893C27.7342 34.5893 27.0977 33.6455 26.6892 33.0992C26.2808 32.5529 25.3692 31.5401 25.3692 31.5401C25.3692 31.5401 25.5518 32.008 25.7161 32.5969C25.8804 33.1857 26.0534 33.7922 26.0534 33.7922C26.0534 33.7922 24.5054 35.3043 23.7017 36.0185C22.8979 36.7328 21.765 37.7213 21.765 37.7213C21.765 37.7213 22.0634 37.956 22.532 38.294C23.0006 38.6321 23.2206 38.7868 23.2206 38.7868C23.2206 38.7868 22.5606 39.3852 22.0114 39.8274C21.4621 40.2696 20.1781 41.1393 20.1781 41.1393L19.015 40.3525L17.8417 41.1452C17.8417 41.1452 16.5547 40.274 16.0084 39.8333C15.4621 39.3925 14.8043 38.7927 14.8043 38.7927C14.8043 38.7927 15.0243 38.6365 15.4929 38.2999C15.9615 37.9633 16.2599 37.7272 16.2599 37.7272C16.2599 37.7272 15.1291 36.7401 14.3232 36.0244C13.5173 35.3087 11.9715 33.798 11.9715 33.798C11.9715 33.798 12.1438 33.1923 12.3029 32.6027C12.3998 32.2446 12.5156 31.8919 12.6498 31.546C12.6498 31.546 11.7397 32.5595 11.3298 33.105C10.9199 33.6506 10.2863 34.5952 10.2863 34.5952C10.2863 34.5952 8.93552 33.2312 7.947 32.1268C6.92988 30.9894 5.95677 29.7875 4.86705 28.3311C3.77734 26.8748 2.1677 24.4328 2.1677 24.4328C3.35446 23.6138 4.45955 22.6823 5.46764 21.6513C6.37874 20.5682 7.04378 19.3002 7.41681 17.9348C7.73866 16.8988 7.91149 15.8223 7.93013 14.7376C7.93013 14.7376 8.38919 14.8938 8.93478 15.0844C9.48037 15.2751 9.75757 15.3873 9.75757 15.3873C9.75757 15.3873 9.7055 16.4007 9.74437 17.5982C9.78324 18.7958 9.80964 21.1064 9.99223 22.8217C10.1318 24.2466 10.5187 25.6362 11.1355 26.9283C12.1882 29.1062 13.5933 31.0953 15.2941 32.8154C16.3524 33.9303 17.6061 34.8417 18.993 35.5045C20.3962 34.8488 21.6646 33.9368 22.733 32.8154C24.4338 31.0953 25.8389 29.1062 26.8916 26.9283C27.5084 25.6362 27.8953 24.2466 28.0349 22.8217C28.2175 21.1057 28.2424 18.7928 28.2813 17.5982C28.3201 16.4037 28.2688 15.3873 28.2688 15.3873C28.2688 15.3873 28.5453 15.2765 29.0916 15.0844C29.6379 14.8923 30.0962 14.7376 30.0962 14.7376C30.1142 15.8223 30.2871 16.8989 30.6096 17.9348C30.9831 19.2999 31.6481 20.5679 32.5587 21.6513C33.5658 22.6834 34.671 23.6149 35.8587 24.4328C35.8587 24.4328 34.2454 26.8762 33.1556 28.3311L33.1534 28.3253Z"
    fill="#fff"/>
  <Path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M23.9302 20.7397C23.9735 20.7661 24.041 21.2618 23.7975 21.4319C23.7443 21.476 23.6826 21.5085 23.6161 21.5274C23.5497 21.5463 23.4801 21.5512 23.4117 21.5418C23.3433 21.5323 23.2776 21.5087 23.2187 21.4725C23.1599 21.4363 23.1093 21.3883 23.0701 21.3314C22.7386 21.5705 22.4922 21.7524 22.4922 21.7524V22.7152C23.0062 22.5879 23.4912 22.3639 23.9214 22.0552C24.3961 21.5681 24.6964 20.9378 24.7757 20.2623C24.4784 20.3937 24.1951 20.5549 23.9302 20.7433V20.7397Z"
    fill="#DD1C21"/>
  <Path
    d="M49.7921 21.2646V28.7005H47.8716L47.81 27.8835C47.5919 28.1924 47.3003 28.442 46.9615 28.6097C46.6227 28.7774 46.2474 28.858 45.8696 28.8442C45.4497 28.8591 45.0328 28.7676 44.6576 28.5783C44.2825 28.3889 43.9613 28.1078 43.7239 27.7611C43.2341 26.9874 43.0918 26.1272 43.0918 24.0842V19.6109C43.0918 17.3222 43.2546 16.4848 43.8471 15.8109C44.2003 15.4722 44.6219 15.2131 45.0836 15.051C45.5453 14.889 46.0364 14.8278 46.5237 14.8715C47.7909 14.8715 48.6892 15.1978 49.1769 15.8314C49.6737 16.6152 49.8896 17.5444 49.7892 18.467V19.2003H47.6509V18.3621C47.6509 17.3406 47.3194 16.8918 46.5685 16.8918C45.6291 16.8918 45.445 17.3816 45.445 19.8764V23.7168C45.445 26.2299 45.665 26.821 46.5509 26.821C46.7413 26.8279 46.9295 26.7793 47.0928 26.6811C47.2561 26.5829 47.3873 26.4394 47.4705 26.268C47.6442 25.777 47.7068 25.2535 47.6538 24.7354V23.3047H46.5912V21.2616L49.7921 21.2646Z"
    fill="#fff"/>
  <Path
    d="M57.5741 28.7045H50.9141C50.9551 25.3958 51.6085 23.762 54.0197 20.902C55.0412 19.6348 55.2854 19.1244 55.2854 18.2489C55.2854 17.3293 54.9187 16.7771 54.2639 16.7771C54.1058 16.7755 53.9499 16.814 53.8108 16.889C53.6716 16.9641 53.5538 17.0731 53.4682 17.2061C53.2665 17.5959 53.1897 18.0383 53.2482 18.4732V19.78H50.9581V18.8406C50.8623 17.8962 51.0698 16.9459 51.5506 16.1274C51.8778 15.7046 52.3046 15.3696 52.7929 15.152C53.2812 14.9345 53.8158 14.8413 54.3489 14.8807C56.4132 14.8807 57.6591 16.1464 57.6591 18.254C57.6591 19.6018 57.3277 20.3168 55.963 22.0328C54.1245 24.3002 53.6163 25.1795 53.3685 26.6087H57.577L57.5741 28.7045Z"
    fill="#fff"/>
  <Path
    d="M68.3398 17.262H64.3798V20.7138H68.1198V22.6937H64.3798V26.5136H68.5686V28.6989H62.0273V15.0753H68.3398V17.262Z"
    fill="#fff"/>
  <Path
    d="M73.609 19.5899V18.7942C73.609 17.4677 73.2776 16.8949 72.548 16.8949C71.9342 16.8949 71.5675 17.3437 71.5675 18.0998C71.5675 18.8558 71.874 19.3669 72.8545 20.2L74.2023 21.3653C75.9799 22.8972 76.348 23.5916 76.348 25.3897C76.348 27.6982 75.1219 28.9031 72.773 28.9031C70.403 28.9031 69.3008 27.718 69.3008 25.1631V23.6965H71.5469V24.8023C71.5469 26.1707 71.9759 26.8864 72.8141 26.8864C73.5702 26.8864 73.9581 26.3958 73.9581 25.4147C73.9581 24.5347 73.7535 24.1489 72.875 23.3724L71.588 22.2482C70.9237 21.7767 70.3435 21.1966 69.872 20.5322C69.4647 19.8561 69.2719 19.0725 69.3191 18.2846C69.3191 16.0171 70.4426 14.8739 72.6081 14.8739C73.0487 14.846 73.4904 14.9055 73.9079 15.0491C74.3254 15.1927 74.7103 15.4175 75.0405 15.7106C75.6118 16.2833 75.8574 17.1201 75.8574 18.4481V19.5899H73.609Z"
    fill="#fff"/>
  <Path
    d="M79.5341 28.7011H77.1875V15.0753H80.5175C82.0091 15.0753 82.6177 15.2219 83.0922 15.648C83.7045 16.2192 83.9502 17.1806 83.9502 18.9157C83.9502 21.7756 83.1941 22.7157 80.9054 22.7157H79.537L79.5341 28.7011ZM80.3312 20.7343C81.2706 20.7343 81.5573 20.3053 81.5573 18.9157C81.6332 18.3342 81.4953 17.745 81.1694 17.2576C81.0059 17.111 80.7815 17.053 80.2498 17.053H79.5349V20.7299L80.3312 20.7343Z"
    fill="#fff"/>
  <Path
    d="M91.6282 24.4724C91.6282 26.5367 91.4654 27.2304 90.8546 27.9248C90.1221 28.557 89.1869 28.9047 88.2194 28.9047C87.2519 28.9047 86.3166 28.557 85.5842 27.9248C84.9719 27.2304 84.8105 26.5359 84.8105 24.4724V19.3039C84.8105 17.2411 84.9741 16.5466 85.5842 15.8522C86.3166 15.22 87.2519 14.8723 88.2194 14.8723C89.1869 14.8723 90.1221 15.22 90.8546 15.8522C91.4684 16.5466 91.6282 17.2411 91.6282 19.3039V24.4724ZM87.1549 24.4328C87.1549 26.4758 87.375 27.0074 88.2176 27.0074C89.0601 27.0074 89.2786 26.4758 89.2786 24.4328V19.3472C89.2786 17.3056 89.0587 16.7732 88.2176 16.7732C87.3764 16.7732 87.1549 17.3049 87.1549 19.3472V24.4328Z"
    fill="#fff"/>
  <Path
    d="M95.2451 28.7011H92.8984V15.0753H96.1251C97.5558 15.0753 98.2517 15.2219 98.7195 15.648C99.2725 16.1378 99.5365 17.1396 99.5365 18.7734C99.5365 20.7534 99.271 21.2454 97.9437 21.5519C99.1082 21.7565 99.4551 22.2669 99.4551 23.8986V25.8595C99.3827 26.8114 99.4569 27.7688 99.6751 28.6982H97.2067C97.1158 28.131 97.0816 27.5561 97.1048 26.9822V24.4889C97.1048 22.9973 96.7733 22.5089 95.7782 22.5089H95.2466L95.2451 28.7011ZM95.9197 20.6118C96.9823 20.6118 97.2881 20.1828 97.2881 18.7932C97.2881 17.3427 97.0226 16.976 95.9615 16.976H95.2466V20.6118H95.9197Z"
    fill="#fff"/>
  <Path
    d="M104.907 28.7007H102.557V17.1802H100.188V15.0792H107.277V17.1795H104.907V28.7007Z"
    fill="#fff"/>
  <Path
    d="M112.102 19.5899V18.7943C112.102 17.4677 111.771 16.895 111.04 16.895C110.427 16.895 110.059 17.3438 110.059 18.0998C110.059 18.8559 110.366 19.367 111.346 20.2001L112.695 21.3653C114.472 22.8972 114.84 23.5917 114.84 25.3898C114.84 27.6983 113.614 28.9031 111.265 28.9031C108.897 28.9031 107.791 27.7203 107.791 25.1676V23.6958H110.035V24.8017C110.035 26.17 110.465 26.8857 111.302 26.8857C112.058 26.8857 112.446 26.3952 112.446 25.414C112.446 24.534 112.242 24.1483 111.364 23.3717L110.076 22.2475C109.412 21.776 108.832 21.1959 108.36 20.5315C107.953 19.8555 107.76 19.0718 107.807 18.2839C107.807 16.0165 108.931 14.8732 111.096 14.8732C111.537 14.8453 111.979 14.9048 112.396 15.0484C112.813 15.1921 113.198 15.4169 113.529 15.7099C114.101 16.2827 114.345 17.1194 114.345 18.4474V19.5892L112.102 19.5899Z"
    fill="#fff"/>
  </Svg>
);