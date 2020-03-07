import React, { SVGProps } from 'react'
import { getColorMap, ThemeId } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@jacco-meijer/admin-theme-switcher'

const componentId = 'svg-stack'
export const SvgStack = (props: SVGProps<SVGSVGElement>) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const colorMap: any = getColorMap(currentThemeId)
  const primary = colorMap.jarPrimary
  const secondary = colorMap.jarSecondary

  return (
    <svg
      viewBox="0 0 931 1265"
      fill="none"
      width="100%"
      id={componentId}
      {...props}
    >
      <path
        d="M239.869 1238.08H46.291C20.725 1238.08 0 1217.36 0 1191.79V1023.4a46.288 46.288 0 0114.472-33.621l14.955-14.152a46.29 46.29 0 0014.472-33.622v-42.837h201.613v43.884a46.288 46.288 0 0013.203 32.373l14.241 14.556a46.282 46.282 0 0113.203 32.369v169.44c0 25.57-20.725 46.29-46.29 46.29z"
        fill={secondary}
        fillOpacity={0.72}
      />
      <rect
        x={26.185}
        y={843}
        width={233.79}
        height={56.207}
        rx={12.625}
        fill={primary}
        fillOpacity={0.91}
      />
      <path
        d="M247.837 1243.4v-5.32H38.322v5.32c0 11.62 9.42 21.04 21.041 21.04h167.433c11.621 0 21.041-9.42 21.041-21.04zM41.83 1035.59s44.52-17.67 102.594-17.67c58.074 0 99.905 17.67 99.905 17.67v105.78H41.831v-105.78z"
        fill={primary}
        fillOpacity={0.91}
      />
      <path
        d="M399.869 816.638H206.29c-25.565 0-46.29-20.725-46.29-46.291V601.959a46.292 46.292 0 0114.472-33.622l14.955-14.152a46.288 46.288 0 0014.472-33.622v-42.837h201.613v43.884a46.288 46.288 0 0013.203 32.373l14.241 14.556a46.288 46.288 0 0113.203 32.373v169.435c0 25.566-20.725 46.291-46.29 46.291z"
        fill={secondary}
        fillOpacity={0.72}
      />
      <rect
        x={186.185}
        y={421.558}
        width={233.79}
        height={56.207}
        rx={12.625}
        fill={primary}
        fillOpacity={0.91}
      />
      <path
        d="M407.837 821.959v-5.321H198.322v5.321c0 11.621 9.421 21.041 21.041 21.041h167.433c11.621 0 21.041-9.42 21.041-21.041zM201.831 614.147s44.52-17.674 102.593-17.674c58.074 0 99.905 17.674 99.905 17.674v105.777H201.831V614.147z"
        fill={primary}
        fillOpacity={0.91}
      />
      <path
        d="M561.869 395.196H368.29c-25.565 0-46.29-20.725-46.29-46.291V180.517a46.292 46.292 0 0114.472-33.622l14.955-14.152a46.288 46.288 0 0014.472-33.622V56.284h201.613v43.884a46.288 46.288 0 0013.203 32.373l14.241 14.556a46.288 46.288 0 0113.203 32.373v169.435c0 25.566-20.725 46.291-46.29 46.291z"
        fill={secondary}
        fillOpacity={0.72}
      />
      <rect
        x={348.185}
        y={0.116}
        width={233.79}
        height={56.207}
        rx={12.625}
        fill={primary}
        fillOpacity={0.91}
      />
      <path
        d="M569.837 400.517v-5.321H360.322v5.321c0 11.621 9.421 21.041 21.041 21.041h167.433c11.621 0 21.041-9.42 21.041-21.041zM363.831 192.705s44.52-17.674 102.593-17.674c58.074 0 99.905 17.674 99.905 17.674v105.777H363.831V192.705z"
        fill={primary}
        fillOpacity={0.91}
      />
      <path
        d="M721.869 816.638H528.29c-25.565 0-46.29-20.725-46.29-46.291V601.959a46.292 46.292 0 0114.472-33.622l14.955-14.152a46.288 46.288 0 0014.472-33.622v-42.837h201.613v43.884a46.288 46.288 0 0013.203 32.373l14.241 14.556a46.288 46.288 0 0113.203 32.373v169.435c0 25.566-20.725 46.291-46.29 46.291z"
        fill={secondary}
        fillOpacity={0.72}
      />
      <rect
        x={508.185}
        y={421.558}
        width={233.79}
        height={56.207}
        rx={12.625}
        fill={primary}
        fillOpacity={0.91}
      />
      <path
        d="M729.837 821.959v-5.321H520.322v5.321c0 11.621 9.421 21.041 21.041 21.041h167.433c11.621 0 21.041-9.42 21.041-21.041zM523.831 614.147s44.52-17.674 102.593-17.674c58.074 0 99.905 17.674 99.905 17.674v105.777H523.831V614.147z"
        fill={primary}
        fillOpacity={0.91}
      />
      <path
        d="M561.869 1238.08H368.29c-25.565 0-46.29-20.72-46.29-46.29V1023.4a46.29 46.29 0 0114.472-33.621l14.955-14.152a46.288 46.288 0 0014.472-33.622v-42.837h201.613v43.884a46.288 46.288 0 0013.203 32.373l14.241 14.556a46.282 46.282 0 0113.203 32.369v169.44c0 25.57-20.725 46.29-46.29 46.29z"
        fill={secondary}
        fillOpacity={0.72}
      />
      <rect
        x={348.185}
        y={843}
        width={233.79}
        height={56.207}
        rx={12.625}
        fill={primary}
        fillOpacity={0.91}
      />
      <path
        d="M569.837 1243.4v-5.32H360.322v5.32c0 11.62 9.421 21.04 21.041 21.04h167.433c11.621 0 21.041-9.42 21.041-21.04zM363.831 1035.59s44.52-17.67 102.593-17.67c58.074 0 99.905 17.67 99.905 17.67v105.78H363.831v-105.78z"
        fill={primary}
        fillOpacity={0.91}
      />
      <path
        d="M883.869 1238.08H690.291c-25.566 0-46.291-20.72-46.291-46.29V1023.4a46.287 46.287 0 0114.473-33.621l14.954-14.152a46.29 46.29 0 0014.473-33.622v-42.837h201.612v43.884a46.288 46.288 0 0013.203 32.373l14.242 14.556a46.286 46.286 0 0113.203 32.369v169.44c0 25.57-20.725 46.29-46.291 46.29z"
        fill={secondary}
        fillOpacity={0.72}
      />
      <rect
        x={670.185}
        y={843}
        width={233.79}
        height={56.207}
        rx={12.625}
        fill={primary}
        fillOpacity={0.91}
      />
      <path
        d="M891.837 1243.4v-5.32H682.322v5.32c0 11.62 9.421 21.04 21.042 21.04h167.432c11.621 0 21.041-9.42 21.041-21.04zM685.831 1035.59s44.52-17.67 102.594-17.67c58.073 0 99.904 17.67 99.904 17.67v105.78H685.831v-105.78z"
        fill={primary}
        fillOpacity={0.91}
      />
    </svg>
  )
}
