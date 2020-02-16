class AddCommentColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :requests, :comment, :string, default: nil
  end
end
