import AppAlert from '@/components/app/AppAlert.vue';
import AppCard from '@/components/app/AppCard.vue';
import AppGrid from '@/components/app/AppGrid.vue';
import AppModal from '@/components/app/AppModal.vue';
import AppPage from '@/components/app/AppPage.vue';

export default {
	install(app) {
		// 컴포넌트 스캔
		app.component('AppAlert', AppAlert);
		app.component('AppCard', AppCard);
		app.component('AppGrid', AppGrid);
		app.component('AppModal', AppModal);
		app.component('AppPage', AppPage);
	},
};
