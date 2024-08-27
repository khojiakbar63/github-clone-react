import './style.scss'

export const Container = ({children, className}) => {
  return (
    <div className={className && className}>{children}</div>
  )
}
