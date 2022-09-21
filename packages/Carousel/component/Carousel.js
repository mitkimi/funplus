/* eslint-disable */
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
Swiper.use(Pagination)
Swiper.use(Autoplay)
Swiper.use(Navigation)
export default {
  name: 'Carousel',
  props: {
    mode: {
      type: String,
      default: 'normal'
    },
    duration: {
      type: Number,
      default: 3000
    },
    indicator: {
      type: String,
      default: 'countdown'
    },
    data: {
      type: Array,
      default: () => { return [] }
    },
    magic: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      mySwiper: null
    }
  },
  computed: {
    spaceBetween() {
      return this.mode === 'card' ? 20 : 0
    },
    rollPaginationList() {
      const list = this.data.map(item => item.name);
      return list;
    }
  },
  methods: {
    renderCountdownPagination(current, total) {
      let paginationHtml = '';
      for(let i = 0; i < total; i++) {
        // 判断是否是激活焦点，是的话添加 activ e类，不是就只添加基本样式类
        if (i === (current -1)) {
          paginationHtml += `<span class="swiper-pagination-customs swiper-pagination-customs-active">
            <span style="animation-duration: ${this.duration + 500}ms"></span>
          </span>`;
        } else {
          paginationHtml += '<span class="swiper-pagination-customs"></span>';
        }
      }
      return paginationHtml;
    },
    renderRollPagination(current, total) {
      const originList = this.rollPaginationList;
      const activeIndex = total <= 2 ? current - 1 : current;
      const rollList = total <= 2 ? originList : [originList[originList.length - 1], ...originList, originList[0]]
      const pre = rollList[activeIndex - 1];
      const curr = rollList[activeIndex];
      const next = rollList[activeIndex + 1];
      const preHtml = pre ? `<p class="swiper-pagination-roll"><span>${pre}</span></p>` : '<p class="swiper-pagination-roll"> </p>';
      const nextHtml = next ? `<p class="swiper-pagination-roll"><span>${next}</span></p>` : '<p class="swiper-pagination-roll"> </p>'
      const paginationHtml = `
        <div class="swiper-pagination-roll-box">
          ${preHtml}
          <p class="swiper-pagination-roll swiper-pagination-roll-active"><span>${curr}</span></p>
          ${nextHtml}
        </div>
      `;
      return paginationHtml;
    },
    init() {
      this.mySwiper = new Swiper('.swiper', {
        loop: true,
        spaceBetween: this.spaceBetween,
        slidesPerView: 'auto',
        centeredSlides: true,
        autoplay: {
          delay: this.duration,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'custom',
          renderCustom: (swiper, current, total) => {
            if (this.indicator === 'countdown') {
              return this.renderCountdownPagination(current, total);
            }
            return this.renderRollPagination(current, total);
          }
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.mySwiper && this.mySwiper.destroy()
  }
}