class AddCompletedRunstoUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :completed_runs, :integer, :default => 0
    add_column :users, :total_distance, :integer, :default => 0
  end
end
