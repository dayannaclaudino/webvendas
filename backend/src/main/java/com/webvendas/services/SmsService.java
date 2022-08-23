package com.webvendas.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import com.webvendas.entidades.Venda;
import com.webvendas.repositorios.VendaRepository;

@Service
public class SmsService {
	
	@Value("${twilio.sid}")
	private String twilioSid;

	@Value("${twilio.key}")
	private String twilioKey;

	@Value("${twilio.phone.from}")
	private String twilioPhoneFrom;

	@Value("${twilio.phone.to}")
	private String twilioPhoneTo;

	@Autowired
	private VendaRepository vendaRepository;
	
	public void sendSms(Long vendaId) {

		Venda venda = vendaRepository.findById(vendaId).get();
		String date = venda.getDate().getMonthValue() + "/" + venda.getDate().getYear();
		String msg = "O Vendedor " + venda.getNomeVendedor() + " foi destaque em " + date 
				+ " com um total de R$ " + String.format("%.2f", venda.getTotal());	
		
		Twilio.init(twilioSid, twilioKey);

		PhoneNumber to = new PhoneNumber(twilioPhoneTo);
		PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

		Message message = Message.creator(to, from, msg).create();

		System.out.println(message.getSid());
	}

}
