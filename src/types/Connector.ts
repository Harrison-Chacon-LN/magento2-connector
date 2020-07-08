import Connector from 'react-storefront-connector'
import home from '../home';
import cart from '../cart';
import addToCartFromAmp from '../cart/addToCartFromAmp';
import product from '../product';
import productSlots from '../product/productSlots';
import productSuggestions from '../product/productSuggestions';
import routes from '../routes';
import session from '../session';
import signIn from '../session/signIn';
import signOut from '../session/signOut';
import signUp from '../session/signUp';
import subcategory from '../subcategory';
import search from '../search';
import searchSuggestions from '../search/searchSuggestions';

export default class Magento2Connector implements Connector {
  home = home
  cart = cart
  product = product
  session = session
  addToCartFromAmp = addToCartFromAmp
  signIn = signIn
  signOut = signOut
  signUp = signUp
  subcategory = subcategory
  search = search
  routes = routes
  productSlots = productSlots
  productSuggestions = productSuggestions
  searchSuggestions = searchSuggestions
}