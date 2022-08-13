import icon from '../../assets/img/notification-icon.svg'

import "./styles.css"

function NotificationButton() {
    return (
        <div className="web-vendas-btn-notification">
          <img src={icon} alt="Notificar"/>
        </div>
    )
  }
  
  export default NotificationButton
  