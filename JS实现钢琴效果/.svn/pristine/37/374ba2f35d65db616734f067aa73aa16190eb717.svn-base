import componentsMap from './components.js'
 
let routerUtil = {
	/**
	 * 后台返回的路由表，需要组合
	 * @param {Array} routerTable 路由表
	 */
	combination(routerTable) {
		if (routerTable) {
			routerTable.forEach((item, index) => {
				item.meta = {
					icon: item.icon,
					title: item.name,
					userAuth: item.userAuth,
				}
				
				item.component = componentsMap[item.path]
				item.path="/"+item.path
				delete item.icon
				delete item.title
				delete item.userAuth
			})
		}
	},
	/**
	 * 递归组合成路由树
	 * @param {Array} notesArray 路由表
	 * @param {Number} chileId 父节点ID
	 */
	routerTree(notesArray, chileId) {
		let treeNotes = [];
		if (notesArray && notesArray.length > 0) {
			notesArray.forEach(note => {
				let parentId = note.parentId
				if (chileId == parentId) {
					let cchileId = note.menuId
					let children = routerUtil.routerTree(notesArray, cchileId)
					if (children && children.length > 0) {
						note["children"] = children
					}
					treeNotes.push(note);
				}
			})
		}
		return treeNotes;
	},
}
export default routerUtil;
