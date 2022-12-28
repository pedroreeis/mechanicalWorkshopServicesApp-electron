import '../styles/button.scss';

export function Button({ isOutlined = false, isDisabled = false, isInvisible = false, ...props }) {
  return (
    <button 
      className={`button ${isOutlined ? 'outlined': '' } ${isDisabled ? 'disabled': '' } ${isInvisible ? 'invisible': '' }`} 
      {...props} 
      />
  )
}