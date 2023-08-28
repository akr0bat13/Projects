import whatsAppWhite from '../assets/images/icons/Whatsapp-white.svg'
import closeIcon from '../assets/images/icons/close.svg'
import instagram from '../assets/images/icons/instagram.svg'
import logo from '../assets/images/icons/logo.svg'
import logoWhite from '../assets/images/icons/logo_white.svg'
import mail from '../assets/images/icons/mail.svg'
import person from '../assets/images/icons/person.svg'
import phone from '../assets/images/icons/phone.svg'
import telegramWhite from '../assets/images/icons/telegram-white.svg'
import telegram from '../assets/images/icons/telegram.svg'
import tick from '../assets/images/icons/tick.svg'
import vk from '../assets/images/icons/vk.svg'
import whatsApp from '../assets/images/icons/whatsApp.svg'

export const logoIcon = {
  logo: logo,
  logo_white: logoWhite,
}

export const links = [
  {
    id: 1,
    text: 'Проекты',
    url: '/projects',
  },
  {
    id: 2,
    text: 'О нас',
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

export const introLinks = [
  {
    id: 1,

    icon: telegramWhite,
    link: 'https://vk.com/al_im.php',
  },
  {
    id: 2,
    icon: whatsAppWhite,
    link: 'https://vk.com/al_im.php',
  },
]

export const mediaLinks = [
  {
    id: 1,

    icon: telegram,
    link: 'https://vk.com/al_im.php',
  },
  {
    id: 2,
    icon: whatsApp,
    link: 'https://vk.com/al_im.php',
  },
]

export const footerComponents = {
  phone: '+79262289926',
  mail: '9711081@mail.ru',
  copyrightDate: `2000-${new Date().getFullYear()}`,
}
