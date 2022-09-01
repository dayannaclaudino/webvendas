import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Venda } from "../../models/venda";
import { BASE_URL } from "../../utils/request";
import NotificationButton from "../NotificationButton";
import "./styles.css";

function VendaCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [vendas, setVendas] = useState<Venda[]>([]); 
    
  useEffect(() => {

      const dmin = minDate.toISOString().slice(0,10);
      const dmax = maxDate.toISOString().slice(0,10);      
  
      axios.get(`${BASE_URL}/vendas?minDate=${dmin}&maxDate=${dmax}`).then((response) => {
        setVendas(response.data.content);
              
  });
}, [minDate, maxDate]);

  return (
    <div className="webvendas-card">
      <h2 className="webvendas-sales-title">Vendas</h2>

      <div>
        <div className="webvendas-form">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className="webvendas-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="webvendas-form">
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            className="webvendas-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

      <div>
        <table className="webvendas-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">Data</th>
              <th>Vendedor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
          {vendas.map((venda) => {
                return (
                <tr key={venda.id}>
                    <td className="show992">{venda.id}</td>
                    <td className="show576">{new Date(venda.date).toLocaleDateString()}</td>
                    <td>{venda.nomeVendedor}</td>
                    <td className="show992">{venda.visitas}</td>
                    <td className="show992">{venda.numeroVendas}</td>
                    <td>R$ {venda.total.toFixed(2)}</td>
                    <td>
                      <div className="web-vendas-btn-container">
                        <NotificationButton vendaId={venda.id}/>
                      </div>
                    </td>
                </tr>
                );
              })}         
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VendaCard;
