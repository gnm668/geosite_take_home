class Api::RequestsController < ApplicationController

    before_action :check_login

    def index
        @requests = Request.last(9)
        render :index
    end

    def show
        # @request = Request.find_by(id: params[:id]) rescue not_found
        @request = Request.find_by(id: params[:id])
        if @request
            render :show, status: 200
        else
            not_found
        end
    end

    def create
        @request = Request.new(request_params)
        if @request.save
            render :show
        else
            render json: @request.errors.full_messages, status: 400
        end
    end

    def update
        @requests = Request.last(9)
        render :index, status: 405
    end

    def destroy
        @request = Request.find_by(id: params[:id])
        @requests = Request.last(9)
        if @request
            @request.destroy
            render :show
        else
            render :index, status: 400
        end
    end

    private

    def request_params
        params.require(:request).permit(:request_type, :comment)
    end
end
