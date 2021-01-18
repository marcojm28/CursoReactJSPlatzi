import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import BadgeDetail from "../pages/BadgeDetail";
import Error from "./Error";
import "../pages/styles/BadgeNew.scss";
import Api from "../api";
function BadgeDetailContainer(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [badgeDetail, setBadgeDetail] = useState([
    {
      email: "",
      firstName: "",
      lastName: "",
      title: "",
      twitter: "",
      id: "",
    },
  ]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      const dataBadges = await Api.badges.read(props.match.params.badgeId);
      setBadgeDetail({
        email: dataBadges.email,
        firstName: dataBadges.firstName,
        lastName: dataBadges.lastName,
        title: dataBadges.title,
        twitter: dataBadges.twitter,
        id: dataBadges.id,
      });
      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      setErrorMessage(error.message);
    }
  };

  const handleCloseModal = (e) => {
    setModalIsOpen(false);
  };

  const handleOpenModal = (e) => {
    setModalIsOpen(true);
  };

  const handleDeleteBadge = async () => {
    setLoading(true);
    setError(false);
    try {
      await Api.badges.remove(props.match.params.badgeId);
      props.history.push('/badges');
      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      setErrorMessage(error.message);
    }
  };

  if (loading) {
    return <Loader></Loader>;
  }

  if (error) {
    return <Error error={errorMessage}></Error>;
  }

  return (
    <BadgeDetail
      badge={badgeDetail}
      onCloseModal={handleCloseModal}
      onOpenModal={handleOpenModal}
      modalIsOpen={modalIsOpen}
      onDeleteBadge={handleDeleteBadge}
    ></BadgeDetail>
  );
}

export default BadgeDetailContainer;
