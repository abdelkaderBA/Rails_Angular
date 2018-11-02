class CreateSalarieds < ActiveRecord::Migration[5.1]
  def change
    create_table :salarieds do |t|
      t.string :name
      t.date :startDate
      t.date :endDate
      
      t.timestamps
    end
  end
end
