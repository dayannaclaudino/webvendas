import axios from 'axios';
import icon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request';

import "./styles.css"

type Props = {
    vendaId: number;
}

function handleClick(id :number) {
  axios(`${BASE_URL}/vendas/id/notification`)
    .then(response => {
        console.log("sucesso");
        
    });
}

function NotificationButton( {vendaId}: Props) {
    return (
      //Quando o botão for clicado é pra chamar essa funçao handleClick
        <div className="web-vendas-btn-notification" onClick={() => handleClick(vendaId)}>
          <img src={icon} alt="Notificar"/>
        </div>
    )
  }
  
  export default NotificationButton
  