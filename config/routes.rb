Rails.application.routes.draw do
  
  resources :employees
  root 'home#index'

end
