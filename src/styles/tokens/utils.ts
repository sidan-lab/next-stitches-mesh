type utilsInput = string | [string?, string?, string?, string?, string?] | [number?, number?, number?, number?, number?]

interface TraitInterface {
  [key: string]: string | number
}

interface TraitsInterface {
  [key: string]: string | number | TraitInterface
}

const responsiveInterpreter = (trait: string, value: utilsInput) => {
  switch (typeof value) {
    case 'string':
      return { [trait]: value }
    default: {
      const [sm, md, lg, xl, xxl] = value
      const traits: TraitsInterface = {}
      if (sm) {
        traits[trait] = sm
      }
      if (md) {
        traits['@greater-sm'] = { [trait]: md }
      }
      if (lg) {
        traits['@greater-md'] = { [trait]: lg }
      }
      if (xl) {
        traits['@greater-lg'] = { [trait]: xl }
      }
      if (xxl) {
        traits['@greater-xl'] = { [trait]: xxl }
      }
      return traits
    }
  }
}

const margin = {
  m: (value: utilsInput) => ({
    ...responsiveInterpreter('margin', value)
  }),
  mt: (value: utilsInput) => ({
    ...responsiveInterpreter('marginTop', value)
  }),
  mb: (value: utilsInput) => ({
    ...responsiveInterpreter('marginBottom', value)
  }),
  ml: (value: utilsInput) => ({
    ...responsiveInterpreter('marginLeft', value)
  }),
  mr: (value: utilsInput) => ({
    ...responsiveInterpreter('marginRight', value)
  }),
  my: (value: utilsInput) => ({
    ...responsiveInterpreter('marginTop', value),
    ...responsiveInterpreter('marginBottom', value)
  }),
  mx: (value: utilsInput) => ({
    ...responsiveInterpreter('marginLeft', value),
    ...responsiveInterpreter('marginRight', value)
  })
}

const padding = {
  p: (value: utilsInput) => ({
    ...responsiveInterpreter('padding', value)
  }),
  pt: (value: utilsInput) => ({
    ...responsiveInterpreter('paddingTop', value)
  }),
  pb: (value: utilsInput) => ({
    ...responsiveInterpreter('paddingBottom', value)
  }),
  pl: (value: utilsInput) => ({
    ...responsiveInterpreter('paddingLeft', value)
  }),
  pr: (value: utilsInput) => ({
    ...responsiveInterpreter('paddingRight', value)
  }),
  py: (value: utilsInput) => ({
    ...responsiveInterpreter('paddingTop', value),
    ...responsiveInterpreter('paddingBottom', value)
  }),
  px: (value: utilsInput) => ({
    ...responsiveInterpreter('paddingLeft', value),
    ...responsiveInterpreter('paddingRight', value)
  })
}

const font = {
  text: (value: utilsInput) => ({
    ...responsiveInterpreter('fontSize', value)
  }),
  font: (value: utilsInput) => ({
    ...responsiveInterpreter('fontWeight', value)
  })
}

const border = {
  rounded: (value: utilsInput) => ({
    ...responsiveInterpreter('borderRadius', value)
  })
}

const size = {
  h: (value: utilsInput) => ({
    ...responsiveInterpreter('height', value)
  }),
  minH: (value: utilsInput) => ({
    ...responsiveInterpreter('minHeight', value)
  }),
  maxH: (value: utilsInput) => ({
    ...responsiveInterpreter('maxHeight', value)
  }),
  w: (value: utilsInput) => ({
    ...responsiveInterpreter('width', value)
  }),
  minW: (value: utilsInput) => ({
    ...responsiveInterpreter('minWidth', value)
  }),
  maxW: (value: utilsInput) => ({
    ...responsiveInterpreter('maxWidth', value)
  })
}

export const utils = {
  ...margin,
  ...padding,
  ...font,
  ...border,
  ...size
}
