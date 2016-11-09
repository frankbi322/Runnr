class Add < ActiveRecord::Migration[5.0]
  def change
    add_column :routes, :completed, :boolean, :default => false
  end
end
