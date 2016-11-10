class DeleteCompletionsFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :completed_runs
    remove_column :users, :total_distance
  end
end
