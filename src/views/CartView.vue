<template>
    <NavigationBar />
    <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-text product-more">
                        <a href="./home.html"><i class="fa fa-home"></i> Home</a>
                        <span>Shopping Cart</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb Section Begin -->
    <!-- Shopping Cart Section Begin -->
    <section class="shopping-cart spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="cart-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th class="p-name text-center">Product Name</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, index) in cart" :key="item.id">
                                            <td class="cart-pic first-row">
                                                <img :src="item.photo" />
                                            </td>
                                            <td class="cart-title first-row text-center">
                                                <h5>{{ item.name }}</h5>
                                            </td>
                                            <td class="p-price first-row">${{ item.price }}</td>
                                            <td class="delete-item"><a href="#" @click="removeItemInCart(index)"><i class="material-icons">
                                              close
                                              </i></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <h4 class="mb-4">
                                Informasi Pembeli:
                            </h4>
                            <div class="user-checkout">
                                <form>
                                    <div class="form-group">
                                        <label for="namaLengkap">Nama lengkap</label>
                                        <input type="text" class="form-control" id="namaLengkap" aria-describedby="namaHelp" placeholder="Masukan Nama" v-model="buyerInformation.name">
                                    </div>
                                    <div class="form-group">
                                        <label for="namaLengkap">Email Address</label>
                                        <input type="email" class="form-control" id="emailAddress" aria-describedby="emailHelp" placeholder="Masukan Email" v-model="buyerInformation.email">
                                    </div>
                                    <div class="form-group">
                                        <label for="namaLengkap">No. HP</label>
                                        <input type="text" class="form-control" id="noHP" aria-describedby="noHPHelp" placeholder="Masukan No. HP" v-model="buyerInformation.phone_number">
                                    </div>
                                    <div class="form-group">
                                        <label for="alamatLengkap">Alamat Lengkap</label>
                                        <textarea class="form-control" id="alamatLengkap" rows="3" v-model="buyerInformation.address"></textarea>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="proceed-checkout">
                                <ul>
                                    <li class="subtotal">ID Transaction <span>#SH12000</span></li>
                                    <li class="subtotal mt-3">Subtotal <span>${{ subTotal }}.00</span></li>
                                    <li class="subtotal mt-3">Pajak <span>10% ${{ tax }}</span></li>
                                    <li class="subtotal mt-3">Total Biaya <span>${{ total }}.00</span></li>
                                    <li class="subtotal mt-3">Bank Transfer <span>Mandiri</span></li>
                                    <li class="subtotal mt-3">No. Rekening <span>2208 1996 1403</span></li>
                                    <li class="subtotal mt-3">Nama Penerima <span>Shayna</span></li>
                                </ul>
                                <a href="success.html" class="proceed-btn">I ALREADY PAID</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Shopping Cart Section End -->
</template>

<script>
import NavigationBar from '@/components/layouts/NavigationBar.vue';

export default{
    name: "CartView",
    components: {
        NavigationBar
    },
    data() {
        return {
            cart: [],
            buyerInformation: {
                name: '',
                email: '',
                phone_number: '',
                address: ''
            }
        }
    },
    methods: {
        removeItemInCart(index){
            this.cart.splice(index, 1)
            localStorage.setItem('user_cart', JSON.stringify(this.cart))
        }
    },
    mounted() {
        if(localStorage.getItem('user_cart')){
            try {
                this.cart = JSON.parse(localStorage.getItem('user_cart'))
                console.log(this.cart)
            } catch (error) {
                localStorage.removeItem('user_cart')
            }
        }
    },
    computed: {
        subTotal(){
            return this.cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0 
        )},
        tax(){
            return ( this.subTotal * 10 ) / 100
        },
        total(){
            return this.subTotal + this.tax
        }
    }
}
</script>