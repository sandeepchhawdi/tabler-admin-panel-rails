Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "home#index"
  get 'dashboard', to: "home#index"
  get 'home', to: "home#index"
  get 'index', to: "home#index"
  get 'form_elements', to: "home#form_elements"

  get 'interface/empty'
  get 'interface/accordion'
  get 'interface/blank'
  get 'interface/buttons'
  get 'interface/cards'
  get 'interface/cards_masonary'
  get 'interface/colors'
  get 'interface/dropdowns'
  get 'interface/icons'
  get 'interface/modals'
  get 'interface/maps'
  get 'interface/map_fullsize'
  get 'interface/navigation'
  get 'interface/charts'
  get 'interface/pagination'
  get 'interface/skeleton'
  get 'interface/tabs'
  get 'interface/tables'
  get 'interface/carousel'
  get 'interface/lists'
  get 'interface/typography'
  get 'interface/offcanvas'
  get 'interface/markdown'
  get 'interface/sign_in'
  get 'interface/sign_up'
  get 'interface/forgot_password'
  get 'interface/terms_of_service'
  get 'interface/auth_lock'
  get 'interface/error_404'
  get 'interface/error_500'
  get 'interface/error_maintenance'

  get 'extra/activity'
  get 'extra/gallery'
  get 'extra/invoice'
  get 'extra/search_results'
  get 'extra/pricing_cards'
  get 'extra/users'
  get 'extra/license'
  get 'extra/music'
  get 'extra/widgets'
  get 'extra/wizard'
end
