class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?

    def login!(user)
        session[:session_token] = user.session_token
    end

    def logout!
        current_user.reset_token!
        session[:session_token] = nil
    end

    def current_user
        return nil unless session[:session_token]

        @current_user ||= User.find_by_session_token(session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def check_login
        if logged_in? == false 
            redirect_to :root
        end
    end

    def not_found
        raise ActionController::RoutingError.new('Not Found')
    rescue
        render_404
    end

    def render_404
        render file: "#{Rails.root}/public/404", status: :not_found
    end
end
