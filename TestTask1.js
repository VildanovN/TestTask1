import Vue from 'vue';
Vue.config.devtools = true;

function showCover() {
  const coverDiv = document.createElement('div');
  coverDiv.classList.add('cover-div');

  document.body.style.overflowY = 'hidden';
  document.body.append(coverDiv);
};

function hideCover() {
  document.querySelector('.cover-div').remove();
  document.body.style.overflowY = '';
};

let showNotification = function() {
	showCover();
	document.querySelector('.notification-window').style.display = 'flex';
};

let hideNotification = function() {
	if (document.querySelector('.notification-window').style.display === 'flex') {
		hideCover();
		document.querySelector('.notification-window').style.display = 'none';
	}
};

let formObject = {
	inputList: [],
	submitHandler: function(event) {
		if (this.inputList.find(item => !item.correctFlag)) {
			let unit = this.inputList.find(item => !item.correctFlag);
			if (unit.$el.querySelector('input')) {
				unit.$el.querySelector('input').focus();
				unit.$el.querySelector('input').blur();
			} else if (unit.$elquerySelector('select')) {
				unit.$el.querySelector('select').focus();
				unit.$el.querySelector('select').blur();
			}
		} else {
			showNotification();
		}
		event.preventDefault();
	}
};

let secondNameForm = new Vue({
	el: '#form__second-name',
	data: {
		secondName: '',
		correctFlag: false
	},
	methods: {
		handler: function() {
			let regExp = /^[A-ZА-Я][-A-Za-zА-Яа-я']*$/;
			if (!regExp.test(this.secondName)) {
				let message = document.createElement('p');
				message.innerText = 'Необходимо верно заполнить поле';
				message.style.position = 'absolute';
				message.style.top = '75px';
				message.style.minWidth = '500px';
				message.style.color = 'red';
				message.classList.add('warning');
				
				if(!this.$el.querySelector('.warning')) {
					this.$el.append(message);
					this.$el.querySelector('input').style.borderColor = 'red';
				}
				this.correctFlag = false;
				return true;
			} else {
				if (this.$el.querySelector('.warning')) {
					this.$el.querySelector('.warning').remove();
					this.$el.querySelector('input').style.borderColor = 'black';
				}
				this.correctFlag = true;
				return true;
			}
		}
	}
});

formObject.inputList.push(secondNameForm);

let firstNameForm = new Vue({
	el: '#form__first-name',
	data: {
		firstName: '',
		correctFlag: false
	},
	methods: {
		handler: function() {
			let regExp = /^[A-ZА-Я][-A-Za-zА-Яа-я']*$/;
			if (!regExp.test(this.firstName)) {
				let message = document.createElement('p');
				message.innerText = 'Необходимо верно заполнить поле';
				message.style.position = 'absolute';
				message.style.top = '75px';
				message.style.minWidth = '500px';
				message.style.color = 'red';
				message.classList.add('warning');
				
				if(!this.$el.querySelector('.warning')) {
					this.$el.append(message);
					this.$el.querySelector('input').style.borderColor = 'red';
				}
				this.correctFlag = false;
				return true;
			} else {
				if (this.$el.querySelector('.warning')) {
					this.$el.querySelector('.warning').remove();
					this.$el.querySelector('input').style.borderColor = 'black';
				}
				this.correctFlag = true;
				return true;
			}
		}
	}
});

formObject.inputList.push(firstNameForm);

let surnameForm = new Vue({
	el: '#form__surname',
	data: {
		surname: '',
		correctFlag: true
	},
	methods: {
		handler: function() {
			let regExp = /^[A-ZА-Я][-A-Za-zА-Яа-я']*$/;
			if (!regExp.test(this.surname) && this.surname !== '') {
				let message = document.createElement('p');
				message.innerText = 'Необходимо верно заполнить поле';
				message.style.position = 'absolute';
				message.style.top = '75px';
				message.style.minWidth = '500px';
				message.style.color = 'red';
				message.classList.add('warning');
				
				if(!this.$el.querySelector('.warning')) {
					this.$el.append(message);
					this.$el.querySelector('input').style.borderColor = 'red';
				}
				this.correctFlag = false;
				return true;
			} else {
				if (this.$el.querySelector('.warning')) {
					this.$el.querySelector('.warning').remove();
					this.$el.querySelector('input').style.borderColor = 'black';
				}this.correctFlag = true;
				return true;
			}
		}
	}
});

formObject.inputList.push(surnameForm);

let birthDateForm = new Vue({
	el: '#form__birth-date',
	data: {
		birthDate: '',
		correctFlag: false
	},
	methods: {
		handler: function() {
			if (new Date(this.birthDate) < new Date('01-01-1900') || new Date(this.birthDate) > new Date() || this.birthDate === '') {
				let message = document.createElement('p');
				message.innerText = 'Необходимо верно заполнить поле';
				message.style.position = 'absolute';
				message.style.top = '75px';
				message.style.minWidth = '500px';
				message.style.color = 'red';
				message.classList.add('warning');
				
				if(!this.$el.querySelector('.warning')) {
					this.$el.append(message);
					this.$el.querySelector('input').style.borderColor = 'red';
				}
				this.correctFlag = false;
				return true;
			} else {
				if (this.$el.querySelector('.warning')) {
					this.$el.querySelector('.warning').remove();
					this.$el.querySelector('input').style.borderColor = 'black';
				}
				this.correctFlag = true;
				return true;
			}
		}
	}
});

formObject.inputList.push(birthDateForm);

let telForm = new Vue({
	el: '#form__tel',
	data: {
		tel: '',
		correctFlag: false
	},
	methods: {
		handler: function() {
			let regExp = /^7[0-9]{10}$/;
			if (!regExp.test(this.tel)) {
				let message = document.createElement('p');
				message.innerText = 'Необходимо верно заполнить поле';
				message.style.position = 'absolute';
				message.style.top = '75px';
				message.style.minWidth = '500px';
				message.style.color = 'red';
				message.classList.add('warning');
				
				if(!this.$el.querySelector('.warning')) {
					this.$el.append(message);
					this.$el.querySelector('input').style.borderColor = 'red';
				}
				this.correctFlag = false;
				return true;
			} else {
				if (this.$el.querySelector('.warning')) {
					this.$el.querySelector('.warning').remove();
					this.$el.querySelector('input').style.borderColor = 'black';
				}
				this.correctFlag = true;
				return true;
			}
		}
	}
});

formObject.inputList.push(telForm);

let clientGroupForm = new Vue({
	el: '#form__client-group',
	data: {
		clientGroup: [],
		correctFlag: false
	},
	methods: {
		blurHandler: function() {
			if (this.clientGroup.length === 0) {
				let message = document.createElement('p');
				message.innerText = 'Необходимо верно заполнить поле';
				message.style.position = 'absolute';
				message.style.top = '120px';
				message.style.minWidth = '500px';
				message.style.color = 'red';
				message.classList.add('warning');
				
				if(!this.$el.querySelector('.warning')) {
					this.$el.append(message);
					this.$el.querySelector('select').style.borderColor = 'red';
				}
				this.correctFlag = false;
				return true;
			} else {
				if (this.$el.querySelector('.warning')) {
					this.$el.querySelector('.warning').remove();
					this.$el.querySelector('select').style.borderColor = 'black';
				}
				this.correctFlag = true;
				return true;
			}
		},
		checkHandler: function() {
			let groupList = [];
			for (let item of this.$el.querySelectorAll('select :checked')) {
				groupList.push(item.value);
			};
			this.clientGroup = groupList;
			return true;
		}
	}
});

formObject.inputList.push(clientGroupForm);

let indexForm = new Vue({
	el: '#form__index',
	data: {
		index: '',
		correctFlag: true
	},
	methods: {
		handler: function() {
			let regExp = /^[0-9]{6}$/;
			if (!regExp.test(this.index) && this.index !== '') {
				let message = document.createElement('p');
				message.innerText = 'Необходимо верно заполнить поле';
				message.style.position = 'absolute';
				message.style.top = '75px';
				message.style.minWidth = '500px';
				message.style.color = 'red';
				message.classList.add('warning');
				
				if(!this.$el.querySelector('.warning')) {
					this.$el.append(message);
					this.$el.querySelector('input').style.borderColor = 'red';
				}
				this.correctFlag = false;
				return true;
			} else {
				if (this.$el.querySelector('.warning')) {
					this.$el.querySelector('.warning').remove();
					this.$el.querySelector('input').style.borderColor = 'black';
				}
				this.correctFlag = true;
				return true;
			}
		}
	}
});

formObject.inputList.push(indexForm);

let countryForm = new Vue({
	el: '#form__country',
	data: {
		country: '',
		correctFlag: true
	},
	methods: {
		handler: function() {
			let regExp = /^[A-ZА-Я][-A-Za-zА-Яа-я'\s]*(?<!\s)$/;
			if (!regExp.test(this.country) && this.country !== '') {
				let message = document.createElement('p');
				message.innerText = 'Необходимо верно заполнить поле';
				message.style.position = 'absolute';
				message.style.top = '75px';
				message.style.minWidth = '500px';
				message.style.color = 'red';
				message.classList.add('warning');
				
				if(!this.$el.querySelector('.warning')) {
					this.$el.append(message);
					this.$el.querySelector('input').style.borderColor = 'red';
				}
				this.correctFlag = false;
				return true;
			} else {
				if (this.$el.querySelector('.warning')) {
					this.$el.querySelector('.warning').remove();
					this.$el.querySelector('input').style.borderColor = 'black';
				}
				this.correctFlag = true;
				return true;
			}
		}
	}
});

formObject.inputList.push(countryForm);

let regionForm = new Vue({
	el: '#form__region',
	data: {
		region: '',
		correctFlag: true
	},
	methods: {
		handler: function() {
			let regExp = /^[A-ZА-Я][-A-Za-zА-Яа-я'\s]*(?<!\s)$/;
			if (!regExp.test(this.region) && this.region !== '') {
				let message = document.createElement('p');
				message.innerText = 'Необходимо верно заполнить поле';
				message.style.position = 'absolute';
				message.style.top = '75px';
				message.style.minWidth = '500px';
				message.style.color = 'red';
				message.classList.add('warning');
				
				if(!this.$el.querySelector('.warning')) {
					this.$el.append(message);
					this.$el.querySelector('input').style.borderColor = 'red';
				}
				this.correctFlag = false;
				return true;
			} else {
				if (this.$el.querySelector('.warning')) {
					this.$el.querySelector('.warning').remove();
					this.$el.querySelector('input').style.borderColor = 'black';
				}
				this.correctFlag = true;
				return true;
			}
		}
	}
});

formObject.inputList.push(regionForm);

let cityForm = new Vue({
	el: '#form__city',
	data: {
		city: '',
		correctFlag: false
	},
	methods: {
		handler: function() {
			let regExp = /^[A-ZА-Я][-A-Za-zА-Яа-я'\s]*(?<!\s)$/;
			if (!regExp.test(this.city)) {
				let message = document.createElement('p');
				message.innerText = 'Необходимо верно заполнить поле';
				message.style.position = 'absolute';
				message.style.top = '75px';
				message.style.minWidth = '500px';
				message.style.color = 'red';
				message.classList.add('warning');
				
				if(!this.$el.querySelector('.warning')) {
					this.$el.append(message);
					this.$el.querySelector('input').style.borderColor = 'red';
				}
				this.correctFlag = false;
				return true;
			} else {
				if (this.$el.querySelector('.warning')) {
					this.$el.querySelector('.warning').remove();
					this.$el.querySelector('input').style.borderColor = 'black';
				}
				this.correctFlag = true;
				return true;
			}
		}
	}
});

formObject.inputList.push(cityForm);

let streetForm = new Vue({
	el: '#form__street',
	data: {
			street: '',
			correctFlag: true
	},
	methods: {
		handler: function() {
			let regExp = /^[A-ZА-Я][-A-Za-zА-Яа-я'\s]*(?<!\s)$/;
			if (!regExp.test(this.street) && this.street !== '') {
				let message = document.createElement('p');
				message.innerText = 'Необходимо верно заполнить поле';
				message.style.position = 'absolute';
				message.style.top = '75px';
				message.style.minWidth = '500px';
				message.style.color = 'red';
				message.classList.add('warning');
				
				if(!this.$el.querySelector('.warning')) {
					this.$el.append(message);
					this.$el.querySelector('input').style.borderColor = 'red';
				}
				this.correctFlag = false;
				return true;
			} else {
				if (this.$el.querySelector('.warning')) {
					this.$el.querySelector('.warning').remove();
					this.$el.querySelector('input').style.borderColor = 'black';
				}
				this.correctFlag = true;
				return true;
			}
		}
	}
});

formObject.inputList.push(streetForm);

let houseForm = new Vue({
	el: '#form__house',
	data: {
			house: '',
			correctFlag: true
	},
	methods: {
		handler: function() {
			let regExp = /^[0-9]+([\\\/](?=[0-9]))?[0-9]*[A-Za-zА-Яа-я]*$/;
			if (!regExp.test(this.house) && this.house !== '') {
				let message = document.createElement('p');
				message.innerText = 'Необходимо верно заполнить поле';
				message.style.position = 'absolute';
				message.style.top = '75px';
				message.style.minWidth = '500px';
				message.style.color = 'red';
				message.classList.add('warning');
				
				if(!this.$el.querySelector('.warning')) {
					this.$el.append(message);
					this.$el.querySelector('input').style.borderColor = 'red';
				}
				this.correctFlag = false;
				return true;
			} else {
				if (this.$el.querySelector('.warning')) {
					this.$el.querySelector('.warning').remove();
					this.$el.querySelector('input').style.borderColor = 'black';
				}
				this.correctFlag = true;
				return true;
			}
		}
	}
});

formObject.inputList.push(houseForm);

let seriesForm = new Vue({
	el: '#form__series',
	data: {
			series: '',
			correctFlag: true
	},
	methods: {
		handler: function() {
			let regExp = /^[0-9]{4,}$/;
			if (!regExp.test(this.series) && this.series !== '') {
				let message = document.createElement('p');
				message.innerText = 'Необходимо верно заполнить поле';
				message.style.position = 'absolute';
				message.style.top = '75px';
				message.style.minWidth = '500px';
				message.style.color = 'red';
				message.classList.add('warning');
				
				if(!this.$el.querySelector('.warning')) {
					this.$el.append(message);
					this.$el.querySelector('input').style.borderColor = 'red';
				}
				this.correctFlag = false;
				return true;
			} else {
				if (this.$el.querySelector('.warning')) {
					this.$el.querySelector('.warning').remove();
					this.$el.querySelector('input').style.borderColor = 'black';
				}
				this.correctFlag = true;
				return true;
			}
		}
	}
});

formObject.inputList.push(seriesForm);

let numberForm = new Vue({
	el: '#form__number',
	data: {
		number: '',
		correctFlag: true
	},
	methods: {
		handler: function() {
			let regExp = /^[0-9]{6,}$/;
			if (!regExp.test(this.number) && this.number !== '') {
				let message = document.createElement('p');
				message.innerText = 'Необходимо верно заполнить поле';
				message.style.position = 'absolute';
				message.style.top = '75px';
				message.style.minWidth = '500px';
				message.style.color = 'red';
				message.classList.add('warning');
				
				if(!this.$el.querySelector('.warning')) {
					this.$el.append(message);
					this.$el.querySelector('input').style.borderColor = 'red';
				}
				this.correctFlag = false;
				return true;
			} else {
				if (this.$el.querySelector('.warning')) {
					this.$el.querySelector('.warning').remove();
					this.$el.querySelector('input').style.borderColor = 'black';
				}
				this.correctFlag = true;
				return true;
			}
		}
	}
});

formObject.inputList.push(numberForm);

let issuedDateForm = new Vue({
	el: '#form__issued-date',
	data: {
		issuedDate: '',
		correctFlag: false
	},
	methods: {
		handler: function() {
			if (new Date(this.issuedDate) < new Date('01-01-1900') || new Date(this.issuedDate) > new Date() || this.issuedDate === '') {
				let message = document.createElement('p');
				message.innerText = 'Необходимо верно заполнить поле';
				message.style.position = 'absolute';
				message.style.top = '75px';
				message.style.minWidth = '500px';
				message.style.color = 'red';
				message.classList.add('warning');
				
				if(!this.$el.querySelector('.warning')) {
					this.$el.append(message);
					this.$el.querySelector('input').style.borderColor = 'red';
				}
				this.correctFlag = false;
				return true;
			} else {
				if (this.$el.querySelector('.warning')) {
					this.$el.querySelector('.warning').remove();
					this.$el.querySelector('input').style.borderColor = 'black';
				}
				this.correctFlag = true;
				return true;
			}
		}
	}
});

formObject.inputList.push(issuedDateForm);

document.querySelector('.form').addEventListener('submit', formObject.submitHandler.bind(formObject));

window.addEventListener('click', hideNotification);