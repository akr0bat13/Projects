import telebot
import config

bot = telebot.TeleBot(config.TOKEN)

@bot.message_handler(commands=['start'])
def welcomeMessege(messege):
    sti = open('sticker.webp', 'rb')
    bot.send_sticker(messege.chat.id, sti)

    bot.send_message(messege.chat.id, f'Welcome {messege.from_user.first_name}, I`m your bot'.format(messege.from_user, bot.get_me()), parse_mode='html')


@bot.message_handler(content_types=['text'])

def func(messege):
    bot.send_message(messege.chat.id, messege.text)

bot.polling(none_stop=True)