require 'rails_helper'

RSpec.describe OrderedAddress, type: :model do
  describe "商品購入機能" do
    before do
      @user = FactoryBot.create(:user)
      @item = FactoryBot.create(:item)
      @ordered_address = FactoryBot.build(:ordered_address, user_id: @user.id, item_id: @item.id)
      sleep(1)
    end
    context "登録できる場合" do
      it "全ての値が正しければ購入できること" do
        expect(@ordered_address).to be_valid
      end
    end

    context "登録できない場合" do
      it "post_codeがnilの場合登録できないこと" do
        @ordered_address.post_code = nil
        @ordered_address.valid?
        expect(@ordered_address.errors.full_messages).to include("Post code can't be blank")
      end
      it "prefecture_idがnilの場合登録できないこと" do
        @ordered_address.prefecture_id = nil
        @ordered_address.valid?
        expect(@ordered_address.errors.full_messages).to include("Prefecture can't be blank")
      end
      it "cutyがnilの場合登録できないこと" do
        @ordered_address.city = nil
        @ordered_address.valid?
        expect(@ordered_address.errors.full_messages).to include("City can't be blank")
      end
      it "house_numberがnilの場合登録できないこと" do
        @ordered_address.house_number = nil
        @ordered_address.valid?
        expect(@ordered_address.errors.full_messages).to include("House number can't be blank")
      end
      it "phone_numberがnilの場合登録できないこと" do
        @ordered_address.phone_number = nil
        @ordered_address.valid?
        expect(@ordered_address.errors.full_messages).to include("Phone number can't be blank")
      end
      it "phone_numberが大文字の場合登録できないこと" do
        @ordered_address.phone_number = "０９０９９９９９９９９"
        @ordered_address.valid?
        expect(@ordered_address.errors.full_messages).to include("Phone number is invalid")
      end
      it "phone_numberが12桁以上の場合登録できないこと" do
        @ordered_address.phone_number = "090999999999"
        @ordered_address.valid?
        expect(@ordered_address.errors.full_messages).to include("Phone number is invalid")
      end
      it "phone_numberが11桁未満の場合登録できないこと" do
        @ordered_address.phone_number = "0909999999"
        @ordered_address.valid?
        expect(@ordered_address.errors.full_messages).to include("Phone number is invalid")
      end
      it "tokenがnilの場合登録できないこと" do
        @ordered_address.token = nil
        @ordered_address.valid?
        expect(@ordered_address.errors.full_messages).to include("Token can't be blank")
      end
    end
  end
end
