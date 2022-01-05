import logging

# logging.warning('watch out')
# logging.info("i told you so")

logging.basicConfig(filename="example.log",
                    encoding="utf-8", level=logging.DEBUG)

logging.debug('this message should go to that file')
logging.info('so should this')
logging.warning('and this')
logging.error('And non-ASCII stuff, too, like Øresund and Malmö')
