export const readmeTemplate = (
  componentFileName: string,
  componentClassName: string,
  componentAttributes: string,
  wheelroomType: string
) =>
  `## ${componentClassName}

  Wheelroom type: ${wheelroomType}

${
  wheelroomType === 'section' || wheelroomType === 'subPage'
    ? `\`\`\`jsx
import { ${componentClassName} } from './${componentFileName}'
<${componentClassName} ${componentAttributes} />
\`\`\`
`
    : `## No views

A global component has no views. 
`
}


`