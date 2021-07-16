export function toButton(button) {
  const meta = `
    data-type="button"
    data-value='${JSON.stringify(button.value)}'
  `
  return `
    <div 
      class="button ${button.active ? 'active' : ''}"
      ${meta}
    >
      <i 
        class="material-icons"
        ${meta}
      >
        ${button.icon}
      </i>
    </div>
  `
}

export function createToolbar() {
  const buttons = [
    {
      icon: 'format_align_left',
      active: false,
      value: {textAlign: 'left'},
    },
    {
      icon: 'format_align_center',
      active: false,
      value: {textAlign: 'center'},
    },
    {
      icon: 'format_align_right',
      active: false,
      value: {textAlign: 'right'},
    },
    {
      icon: 'format_bold',
      active: false,
      value: {fontWeight: 'bolt'},
    },
    {
      icon: 'format_italic',
      active: false,
      value: {fontStyle: 'italic'},
    },
    {
      icon: 'format_underlined',
      active: false,
      value: {TextDecoration: 'underline'},
    },
  ]
  return buttons.map(toButton).join('')
}
