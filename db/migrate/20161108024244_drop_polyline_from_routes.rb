class DropPolylineFromRoutes < ActiveRecord::Migration[5.0]
  def change
    remove_column :routes, :polyline
  end
end
