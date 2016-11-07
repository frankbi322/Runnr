class RemoveAuthorFromComment < ActiveRecord::Migration[5.0]
  def change
    remove_column :comments, :author_id
  end
end
