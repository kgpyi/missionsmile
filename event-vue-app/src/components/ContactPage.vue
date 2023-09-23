<template>
    <div id="contact">
        <div class=" mt-2 b-0 text-left p-4" >    
            <div class="container text-center">
                <div class="row">
                    <div class="col-md-7 align-self-center p-2">
                        <div class="card-body">
                            <p class="card-title contact-card-title">Contact Us</p>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        
                        <img src="../assets/contact.png" class="img-fluid h-50 w-50" alt="...">
                        <!-- <div class="row">
                            <div class="row">
                                <div class="col-4 card p-0 contact-card-sub m-1 text-center">
                                <div class="card-body p-2">
                                    <b class="card-title m-0">Chairman</b>
                                    <p class="card-text m-0">Karan Virk</p>
                                    <p class="card-text m-0"><small class="">8872817475</small></p>
                                </div>
                                </div>
                                <div class="col-4 card p-0 contact-card-sub m-1 text-center">
                                    <div class="card-body p-2">
                                    <b class="card-title m-0">President</b>
                                    <p class="card-text m-0">Yogesh Garg Virk</p>
                                    <p class="card-text m-0"><small class="">9478755445</small></p>
                                    </div>
                                </div>
                                <div class="col-4 card p-0 contact-card-sub m-1 text-center">
                                    <div class="card-body p-2">
                                    <b class="card-title m-0">Vice President</b>
                                    <p class="card-text m-0">Sourav</p>
                                    <p class="card-text m-0"><small class="">964488961</small></p>
                                    </div>
                                </div>
                            </div>
                            <div class="row"> 
                                <div class="col-4 card p-0 contact-card-sub m-1 text-center">
                                    <div class="card-body p-2">
                                    <b class="card-title m-0">Secretary</b>
                                    <p class="card-text m-0">Ashamdeep Mittal</p>
                                    <p class="card-text m-0"><small class="">9915585300</small></p>
                                    </div>
                                </div>
                                <div class="col-4 card p-0 contact-card-sub m-1 text-center">
                                    <div class="card-body p-2">
                                    <b class="card-title m-0">Joint Sec</b>
                                    <p class="card-text m-0">Pradeep Bansal</p>
                                    <p class="card-text m-0"><small class="">9779939840</small></p>
                                    </div>
                                </div>
                                <div class="col-4 card p-0 contact-card-sub m-1 text-center">
                                    <div class="card-body p-2">
                                    <b class="card-title m-0">Cashier</b>
                                    <p class="card-text m-0">Amit Jindal</p>
                                    <p class="card-text m-0"><small class="">9815924722</small></p>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                    </div>
                    <div class="col-md-5 d-flex right-card align-items-center">
                        <div class="mt-4">
                            <!-- <div class="alert alert-success" role="alert" v-if="toastMessageVisible">
                                Message send <a href="#" class="alert-link">successfully !!</a>. Thanks for writting to us
                            </div>
                            <div class="alert alert-danger" role="alert" v-if="!toastMessageVisible">
                                Message not send, <a href="#" class="alert-link">Sorry !!</a>. Please try again.
                            </div> -->
                            <input type="text" name="name" id="name" placeholder="Your Name" v-model="userName">
                            <input type="text" name="subject" id="subject" placeholder="Your Email" v-model="userEmail">
                            <textarea type="text p-5" class="h-50" placeholder="Message" v-model="userMessage"></textarea>
                            <button type="button" class="btn btn-primary m-2 w-50" data-toggle="button" aria-pressed="false" autocomplete="off" @click="sendMessage()">SEND</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    data(){
            return{
                userName:'',
                userEmail:'',
                userMessage:'',
                toastMessageVisible: false,
                toastMessage:''
            }
        },
    methods:{
        sendMessage(){
            //Send Message
            //if send successfully, set toast message to = Message send successfully !!
            //else toastMessage= Message not send
            // this.toastMessageVisible = true;
            // this.toastMessage= "Message Send successfully!!";
            // setTimeout(() => {
            //     this.toastMessageVisible = false;
            // }, 3000);
        }
    }
}
</script>

<style scoped>
.contact-card-title{
    font-size: 40px;
    font-weight:700;
    color: #01557f;
}

.card-header-color{
    color:#081c2b;
}

.contact-card{
    font-size: 13px;
    padding: 0;
    /* height: 50px; */
}

.contact-card-sub{
    padding: 0;
    background-color: #35a6d7;
    color:white;
}

.right-card{
    background-color: rgb(110, 122, 135);
}

input{
    width: 100%;
    display: inline-block;
    margin-bottom: 15px;
    padding: 10px;
}

textarea{
    width: 100%;
    display: inline-block;
    margin-bottom: 15px;
    padding: 10px;
    padding-bottom: 80px;
}
</style>