import telebot
from telebot import types

bot = telebot.TeleBot('5662620573:AAH0enkXGoha3RhRDv99oZhcntC1TMB-nLo')

# Отслеживание команды
@bot.message_handler(commands = ['start'])

def start(messege):
    mess = f'Привет, {messege.from_user.first_name}'
    bot.send_message(messege.chat.id, mess)

# Отслеживание любых текстовых записей

@bot.message_handler(content_types=['text'])

def getUserText(messege):
    if messege.text == "hello":
        bot.send_message(messege.chat.id, "Hi u 2")
    elif messege.text == 'id':
        bot.send_message(messege.chat.id, f'Your ID {messege.from_user.id}')
    # Send photo
    elif messege.test == 'photo':
        photo = open('way to a folder', 'rb')
        bot.send_photo(messege.chat.id, "FILEID")
    else:
        bot.send_message(messege.chat.id, "I don`t understand u")

# Отправка пользователем фото боту
@bot.message_handler(content_types=['sticker'])
def getUserPhoto(messege):
    bot.send_message(messege.chat.id, "Nice")


# Создание кнопок
@bot.message_handler(commands=['website'])
def website(messege):
    markup = types.InlineKeyboardMarkup()
    markup.add(types.InlineKeyboardButton("Just click", url="https://google.com"))
    bot.send_message(messege.chat.id, "Just btn", reply_markup=markup)

# Создание функциональных кнопок, прикркпленных изначально
# @bot.message_handler(commands=['help'])
# def website(messege):
    # markup = types.ReplyKeyboardMarkup()

    # #Сами кнопки
    # website = types.KeyboardButton('Text 1')
    # start = types.KeyboardButton('Text 2')


    # markup.add(website, start)
    # bot.send_message(messege.chat.id, "Just btn", reply_markup=markup)


bot.polling(non_stop=True)