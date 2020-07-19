<template>
    <div class="subscribe__overlay">
        <div class="subscribe__popup">
            <button type="button" class="subscribe__close" @click="$emit('closeHandler')">×</button>
            <step-progress
                customClass='progress'
                :stepsTotal='stepsTotal'
                :stepCurrent='stepCurrent'
            ></step-progress>
            <form class="form" v-if="stepCurrent === 1">
                <p class="form__header">Enter Your Email To Get <span class="form__header_highlight">FREE</span> <br> iPhone Photography Email Tips:</p>
                <div class="form__input-row" ref="emailRow">
                    <label v-if="errors.length" class="form__label" for="email">
                        <span
                            v-for="(error, index) in errors" :key="index"
                        >
                        {{error}}
                        </span>
                    </label>
                    <label v-else class="form__label" for="email">Please enter your email here</label>
                    <input class="form__input" type="text" id="email" v-model="userEmail" data-placeholder="Email" />
                </div>
                <styled-button text="Send Me The Tips »" v-on:clickHandler='checkForm' customClass="subscibe__submit"></styled-button>
            </form>
            <div class="success" v-if="stepCurrent === 2">
                <check-icon></check-icon>
                <p class="success__text">You have successfully subscribed.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userEmail: "",
            stepsTotal: 2,
            stepCurrent: 1,
            errors: []
        }
    },
    methods:{
        isEmailCorrect (email){
            // validation using regex
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return re.test(email)
        },
        checkForm(e){
            // if email not empty and valid
            if (this.userEmail && this.isEmailCorrect(this.userEmail)) {
                this.errors = [];
                this.$refs.emailRow.classList.remove('error');
                //Just show next screen
                this.stepCurrent = 2
                return true;
            }
            // if email empty
            if (!this.userEmail) {
                this.errors = [];
                this.errors.push('The field cannot be empty.');
                this.$refs.emailRow.classList.add('error')
                return false;
            }
            // if email not valid
            if (!this.isEmailCorrect(this.userEmail)) {
                this.errors = [];
                this.errors.push('Please enter a valid email address');
                this.$refs.emailRow.classList.add('error')
                return false;
            }
        },
        floatLabel(){
            // get DOM elements
            const floatContainers = document.querySelectorAll('.form__input-row');
            // add active class and placeholder 
            const handleFocus = (e) => {
                const target = e.target;
                target.parentNode.classList.add('active');
                target.setAttribute('placeholder', target.getAttribute('data-placeholder'));
            };
            
            // remove active class and placeholder
            const handleBlur = (e) => {
                const target = e.target;
                if(!target.value) {
                    target.parentNode.classList.remove('active');
                }
                target.removeAttribute('placeholder');    
            };  
            
            floatContainers.forEach((element) => {
                if (element.querySelector('input').value) {
                    element.classList.add('active');
                }      
                const floatField = element.querySelector('input');
                floatField.addEventListener('focus', handleFocus);
                floatField.addEventListener('blur', handleBlur); 
            });
        }
  },
  mounted(){
      this.floatLabel();
  }
}
</script>