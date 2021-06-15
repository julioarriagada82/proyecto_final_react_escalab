import React from "react";
import Paper from "@material-ui/core/Paper";
import Poster from "../images/poster/Poster.component";
import CastingDetail from "./casting-detail/CastingDetail.component";

import Modal from "../../common/modal/Modal.component";
import useModal from "../../../custom-hooks/useModal";


const CastingMovie = (props) => {

  // props
  const { data } = props;
  const { profile_path, name } = data;

  const { modal, handleCloseModal, handleOpenModal } = useModal();

  return (
    <Paper className="paper">
        <p onClick={handleOpenModal}>
            <Poster poster_path={profile_path} title={name} />
            <h2>{name}</h2>
        </p>
        <Modal isOpen={modal} onClose={handleCloseModal}>
            <CastingDetail casting={data} />
        </Modal>
    </Paper>
  );
};

export default CastingMovie;
