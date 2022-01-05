import os
import logging
from telegram.ext import Updater, CallbackContext, CommandHandler, MessageHandler, Filters, InlineQueryHandler
from telegram import InlineQueryResultArticle, InputTextMessageContent
from telegram.message import Message


updater = Updater(
    token="5086705032:AAEq9xEHqckp7PyaZRrsCqULkHlxVd99kOU", use_context=True)
# for quicker access
dispatcher = updater.dispatcher

logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                    level=logging.INFO)


def start(update: Updater, context: CallbackContext):
    # why we need chat Id?
    context.bot.send_message(
        chat_id=update.effective_chat.id, text="i'm bot, please talk to me")


start_handler = CommandHandler("start", start)


def echo(update: Updater, context: CallbackContext):
    context.bot.send_message(
        chat_id=update.effective_chat.id, text=update.message.text)


echo_handler = MessageHandler(Filters.text & (~Filters.command), echo)


def caps(update: Updater, context: CallbackContext):
    text_caps = "".join(context.args).upper()
    context.bot.send_message(chat_id=update.effective_chat.id, text=text_caps)


def inline_caps(update: Updater, context: CallbackContext):
    query = update.inline_query.query

    if not query:
        return
    result = []

    # result is shown in array,
    result.append(
        InlineQueryResultArticle(
            id=query.upper(),
            title='Caps...',
            input_message_content=InputTextMessageContent(query.upper())
        )
    )
    print(update.inline_query)
    context.bot.answer_inline_query(update.inline_query.id, result)


inline_caps_handler = InlineQueryHandler(inline_caps)


def unknown(update: Updater, context: CallbackContext):
    context.bot.send_message(
        chat_id=update.effective_chat.id, text="sorry, didn't understand that command")


caps_handler = CommandHandler('caps', caps)
unknown_handler = MessageHandler(Filters.command, unknown)
# the second one is the function that we wrote


# dispatcher (it's like redux)
dispatcher.add_handler(unknown_handler)
dispatcher.add_handler(inline_caps_handler)
dispatcher.add_handler(start_handler)
dispatcher.add_handler(echo_handler)
dispatcher.add_handler(caps_handler)

updater.start_polling()
updater.idle()
