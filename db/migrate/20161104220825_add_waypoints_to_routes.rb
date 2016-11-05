class AddWaypointsToRoutes < ActiveRecord::Migration[5.0]
  def change
    add_column :routes, :polyline, :text, null: false, default: ""
  end
end
