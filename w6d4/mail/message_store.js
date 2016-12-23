
const MessageStore = {

  let messages = {
    sent: [
      {to: "louise@gmail.com", subject: "Birthday Party", body: "I'm having a party tomorrow! You should come! -Nate"},
      {to: "bobby@gmail.com", subject: "homeowork", body: "Let's do some homework. -Nate"}
    ],
    inbox: [
      {from: "godzilla@gmail.com", subject: "I'm hungry", body: "I'm coming to your city. Let's hang out! -GodZilla"},
      {from: "kingkong@gmail.com", subject: "I'm angry", body: "Let's hang out so I can beat you down. -Kong"}
    ]
  }
}


module.exports = MessageStore;
