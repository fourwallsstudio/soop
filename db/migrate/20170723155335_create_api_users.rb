class CreateApiUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :api_users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.integer :credit, default: 100
      t.timestamps
    end
  end
end
