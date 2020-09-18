import * as React from "react";
import { HeaderViewModel } from "./Header.ViewModel";
import { Modal } from "../common/Modal/Modal.View";
import { observer } from "mobx-react";
import BasicForm from "../common/Form/BasicForm.View";
import BasicFormViewModel from "../common/Form/BasicForm.ViewModel";

const HeaderView: React.FunctionComponent<{
  headerVM: HeaderViewModel;
  formVm: BasicFormViewModel;

}> = observer(({ headerVM, formVm }) => {
  return <div className="HeaderContainer">
    {headerVM.modalVM.isDisplayed && (
      <Modal vm={headerVM.modalVM}>
        <BasicForm vm={formVm} />
      </Modal>
    )}
    <button className="new-task" onClick={headerVM.modalVM.showModal}>
      New Task
          </button>
    <button className="edit-task" onClick={headerVM.modalVM.showModal}>
      Edit
          </button>
  </div>;
});

export default HeaderView;
