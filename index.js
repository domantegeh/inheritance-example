// superclass
class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} send ${message} to ${receiver}`);
  }
}

// subclass
class WhatsAppService extends MailService {
  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}

class EmailService extends MailService {
  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }
}

const whatsapp = new WhatsAppService("+6281234567890");
const email = new EmailService("example@mail.com");

whatsapp.sendMessage("Hello", "+6281234567891");
whatsapp.sendBroadcastMessage("Hello", ["+6281234567892", "+6281234567893"]);

email.sendMessage("Hello", "example@example.com");
email.sendDelayedMessage("Hello", "example@example.com", 3000);
