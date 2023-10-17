import whatsAppWhite from '../assets/images/icons/Whatsapp-white.svg'
import logo from '../assets/images/icons/logo.svg'
import telegramWhite from '../assets/images/icons/telegram-white.svg'
import telegram from '../assets/images/icons/telegram.svg'
import whatsApp from '../assets/images/icons/whatsApp.svg'

export const logoIcon = {
  logo: logo,
}

export const links = [
  {
    id: 1,
    text: 'Сады',
    url: '/projects',
  },
  {
    id: 2,
    text: 'Обо мне',
    url: '/about',
  },
  {
    id: 3,
    text: 'Публикации',
    url: '/publications',
  },
  {
    id: 4,
    text: 'Сертификаты',
    url: '/sertificates',
  },
  {
    id: 5,
    text: 'Контакты',
  },
]

export const mediaLinks = [
  {
    id: 1,

    icon: telegram,
    link: 'tg://resolve?domain=zelenka06',
  },
  {
    id: 2,
    icon: whatsApp,
    link: 'whatsapp://send?phone=+79262289926',
  },
]

export const footerComponents = {
  phone: '+79262289926',
  mail: '9711081@mail.ru',
  copyrightDate: `2000-${new Date().getFullYear()}`,
}
