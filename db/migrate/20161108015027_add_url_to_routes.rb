class AddUrlToRoutes < ActiveRecord::Migration[5.0]
  def change
    add_column :routes, :map_url, :string
  end
end
