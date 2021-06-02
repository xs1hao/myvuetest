// 函数简写
// export function elBackgroundColorSwith(el,binding) {
//     el.style.backgroundColor = binding.value;
// }
const backgroundD = {
    bind: function(el,binding) {
		el.style.backgroundColor = binding.value.color;
	},
}

export default backgroundD;