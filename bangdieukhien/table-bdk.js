// let danhsachBanbe = [];
// let nguyenAnh = new Friend(1, 'Nguyễn Việt Anh', '0942595229', 'betoanhdeptrai', 'nguyenbetoanh')
// let tranTin = new Friend(2, 'Trần Đình Tín', '0383468186', 'chin.xo.7', 'chinxo12')
// let phamThanh = new Friend(3, 'thanh', '092383293', 'phamthanh', 'thanhpc')
// danhsachBanbe.push(nguyenAnh, tranTin, phamThanh)
// let idUpdate;
//
// function showDanhsach() {
//     let veBang = '';
//     for (let i = 0; i < danhsachBanbe.length; i++) {
//         veBang +=
//             `<tr>
//                 <td>${i + 1}</td>
//                 <td>${danhsachBanbe[i].ten}</td>
//                 <td>${danhsachBanbe[i].sdt}</td>
//                 <td>${danhsachBanbe[i].fb}</td>
//                 <td>${danhsachBanbe[i].github}</td>
//                 <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal2" data-whatever="${danhsachBanbe[i].id}"><i class="bi bi-pencil-square"></i></button>
//                 <td><button class="btn btn-primary" onclick="deleteFriend(${danhsachBanbe[i].id})" ><i class="bi bi-person-dash"></i></button></td>
//                     <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog"
//                          aria-labelledby="exampleModalLabel" aria-hidden="true">
//                         <div class="modal-dialog" role="document">
//                             <div class="modal-content">
//                                 <div class="modal-header">
//                                     <h5 class="modal-title" id="exampleModalLabel">Edit information</h5>
//                                 </div>
//                                 <div class="modal-body">
//                                     <span id="thongBao"></span>
//                                     <div class="form-group">
//                                         <label for="editName" class="col-form-label">New name:</label>
//                                         <input type="text" class="form-control" value="" id="editName">
//                                     </div>
//                                     <div class="form-group">
//                                         <label for="editPhone" class="col-form-label">New phone:</label>
//                                         <input type="text" class="form-control" value="" id="editPhone">
//                                     </div>
//                                     <div class="form-group">
//                                         <label for="editFb" class="col-form-label"> New facebook:</label>
//                                         <input type="text" class="form-control" value="" id="editFb">
//                                     </div>
//                                     <div class="form-group">
//                                         <label for="editGithub" class="col-form-label">New GitHub:</label>
//                                         <input type="text" class="form-control" value="" id="editGithub">
//                                     </div>
//                                 </div>
//                                 <div class="modal-footer">
//                                     <button style="background-color: red;" type="button" class="btn btn-secondary"
//                                             data-dismiss="modal">Huỷ
//                                     </button>
//                                     <button type="button" onclick="editFriend()" class="btn btn-primary" data-dismiss="modal">Đồng ý</button>
//                                 </div>
//                             </div>
//                         </div>
//                 </td>
//              </tr>`
//     }
//     document.getElementById('vebody').innerHTML = veBang;
//     $('#exampleModal2').on('show.bs.modal', function (event) {
//         var button = $(event.relatedTarget) // Button that triggered the modal
//         var recipient = button.data('whatever')
//         idUpdate = recipient;
//         console.log('id Update ---`. ', idUpdate)
//         // Extract info from data-* attributes
//         // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//         // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//         var modal = $(this)
//         modal.find('.modal-title').text('Thêm bạn bè ' + recipient)
//         modal.find('.modal-body input').val(recipient)
//     })
// }
//
// $('#exampleModal').on('show.bs.modal', function (event) {
//     var button = $(event.relatedTarget) // Button that triggered the modal
//     var recipient = button.data('whatever')
//     // Extract info from data-* attributes
//     // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//     // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//     var modal = $(this)
//     modal.find('.modal-title').text('Thêm bạn bè ' + recipient)
//     modal.find('.modal-body input').val(recipient)
// })
// showDanhsach()
//
// function addFriend() {
//     let newId = danhsachBanbe[danhsachBanbe.length - 1].getId() + 1;
//     let newTen = document.getElementById('addName').value;
//     let newSdt = document.getElementById('addPhone').value;
//     let newFb = document.getElementById('addFb').value;
//     let newGithub = document.getElementById('addGithub').value;
//     for (let i = 0; i < danhsachBanbe.length; i++) {
//         if (newTen == danhsachBanbe[i].ten && newSdt == danhsachBanbe[i].sdt && newFb == danhsachBanbe[i].fb && newGithub == danhsachBanbe[i].github) {
//             document.getElementById('thongBao').innerHTML = ` <lable style="color: crimson">Dữ đã tồn tại !</lable>`;
//             break;
//         } else {
//             if (newTen.trim() == "" || newSdt.trim() == "" || newFb.trim() == '' || newGithub.trim() == "") {
//                 document.getElementById('thongBao').innerHTML = ` <lable style="color: crimson">Dữ liệu chưa chính xác !</lable>`;
//             } else {
//                 let newFriend = new Friend(newId, newTen, newSdt, newFb, newGithub);
//                 danhsachBanbe.push(newFriend);
//                 document.getElementById('thongBao').innerHTML = ` <lable style="color: #0253ec">Thành công !</lable>`
//             }
//             showDanhsach()
//             document.getElementById('addName').value = "";
//             document.getElementById('addPhone').value = "";
//             document.getElementById('addFb').value = "";
//             document.getElementById('addGithub').value = "";
//             break;
//         }
//     }
// }
//
// $('#exampleModal2').on('show.bs.modal', function (event2) {
//     var button = $(event2.relatedTarget) // Button that triggered the modal
//     var recipient = button.data('whatever')
//     // Extract info from data-* attributes
//     idUpdate = recipient;
//     console.log('id--------', idUpdate)
//     // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//     // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//     var modal2 = $(this)
//     modal2.find('.modal-title').text('Thêm bạn bè ' + recipient)
//     modal2.find('.modal-body input').val(recipient)
// })
//
// function editFriend() {
//     console.log(idUpdate)
//     console.log("========", idUpdate)
//     let editName = document.getElementById('editName').value
//     console.log('editName', editName)
//     let editPhone = document.getElementById('editPhone').value;
//     let editFb = document.getElementById('editFb').value;
//     let editGH = document.getElementById('editGithub').value;
//     for (let i = 0; i < danhsachBanbe.length; i++) {
//         console.log('...........', i)
//         if (danhsachBanbe[i].getId() === idUpdate) {
//             danhsachBanbe[i].setTen(editName);
//             danhsachBanbe[i].setSdt(editPhone);
//             danhsachBanbe[i].setFb(editFb);
//             danhsachBanbe[i].setGithub(editGH);
//         }
//     }
//     showDanhsach()
// }
//
// function deleteFriend(id) {
//     if (confirm("xác nhận xoá khỏi danh sách")) {
//         for (let i = 0; i < danhsachBanbe.length; i++) {
//             if (danhsachBanbe[i].id == id) {
//                 danhsachBanbe.splice(i, 1)
//             }
//         }
//     }
//     showDanhsach()
// }
// let listSearch =[];
// function searchFriend() {
//      listSearch =[];
//     let searchInput = document.getElementById('searchFriend').value;
//     if (searchInput.trim() === "") {
//         alert("khong de trong")
//         showDanhsach()
//         return;
//     } else {
//         for (let i = 0; i < danhsachBanbe.length; i++) {
//             if (searchInput == danhsachBanbe[i].id
//                 || searchInput == danhsachBanbe[i].ten
//                 || searchInput == danhsachBanbe[i].sdt
//                 || searchInput == danhsachBanbe[i].fb
//                 || searchInput == danhsachBanbe[i].github
//             ){listSearch.push(danhsachBanbe[i])
//             }
//         }
//     }
//     if (listSearch==""){alert('mas;;')
//     }else {
//         showListsearch()
//     }
// }
// function showListsearch() {
//     let veBang = '';
//     for (let i = 0; i < listSearch.length; i++) {
//         veBang +=
//             `<tr>
//                 <td>${i + 1}</td>
//                 <td>${listSearch[i].ten}</td>
//                 <td>${listSearch[i].sdt}</td>
//                 <td>${listSearch[i].fb}</td>
//                 <td>${listSearch[i].github}</td>
//                 <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal2" data-whatever="${listSearch[i].id}"><i class="bi bi-pencil-square"></i></button>
//                 <td><button class="btn btn-primary" onclick="deleteFriend(${listSearch[i].id})" ><i class="bi bi-person-dash"></i></button></td>
//                     <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog"
//                          aria-labelledby="exampleModalLabel" aria-hidden="true">
//                         <div class="modal-dialog" role="document">
//                             <div class="modal-content">
//                                 <div class="modal-header">
//                                     <h5 class="modal-title" id="exampleModalLabel">Edit information</h5>
//                                 </div>
//                                 <div class="modal-body">
//                                     <span id="thongBao"></span>
//                                     <div class="form-group">
//                                         <label for="editName" class="col-form-label">New name:</label>
//                                         <input type="text" class="form-control" value="" id="editName">
//                                     </div>
//                                     <div class="form-group">
//                                         <label for="editPhone" class="col-form-label">New phone:</label>
//                                         <input type="text" class="form-control" value="" id="editPhone">
//                                     </div>
//                                     <div class="form-group">
//                                         <label for="editFb" class="col-form-label"> New facebook:</label>
//                                         <input type="text" class="form-control" value="" id="editFb">
//                                     </div>
//                                     <div class="form-group">
//                                         <label for="editGithub" class="col-form-label">New GitHub:</label>
//                                         <input type="text" class="form-control" value="" id="editGithub">
//                                     </div>
//                                 </div>
//                                 <div class="modal-footer">
//                                     <button style="background-color: red;" type="button" class="btn btn-secondary"
//                                             data-dismiss="modal">Huỷ
//                                     </button>
//                                     <button type="button" onclick="editFriend()" class="btn btn-primary">Đồng ý</button>
//                                 </div>
//                             </div>
//                         </div>
//                 </td>
//              </tr>`
//     }
//     document.getElementById('vebody').innerHTML = veBang;
// }
//
