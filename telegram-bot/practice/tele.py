import logging
# import telegram good for api testing i guess
from telegram.ext import Updater, CallbackContext
from telegram.ext.commandhandler import CommandHandler


dispatcher = updater.dispatcher
# just copy and paste tbh
logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                    level=logging.INFO)


def start(update: Updater, context: CallbackContext):
    user = update.effective_user.id
    print(user == update.effective_chat.id)
    context.bot.send_message(
        chat_id=update.effective_chat.id, text="let's begin my man")


start_handler = CommandHandler("start", start)


# is this right
# updater.stop()


def main() -> None:
    updater = Updater(
        token="5086705032:AAEq9xEHqckp7PyaZRrsCqULkHlxVd99kOU", use_context=True)
    dispatcher.add_handler(start_handler)

    updater.start_polling()
    updater.idle()


if __name__ == "__main__":
    main()
