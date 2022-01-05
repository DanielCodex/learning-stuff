import telegram

bot = telegram.Bot(token='5086705032:AAEq9xEHqckp7PyaZRrsCqULkHlxVd99kOU')
print(bot.get_me())
print(f"here is the update {bot.get_updates()[0]}]")

chatID = 148908780
bot.send_message(chat_id=chatID, text="hello there")
