import React, { useState } from "react";

interface FormDataI {
  name: string;
  aboutMe: string;
  profession: string;
  isLookingForJob: boolean;
}

export const Form = () => {
  const [formData, setFormData] = useState<FormDataI>({
    name: "",
    aboutMe: "",
    profession: "",
    isLookingForJob: false,
  });
  // const [name, setName] = useState("");
  // const [aboutMe, setAboutMe] = useState("");
  // const [profession, setProfession] = useState<string>("");
  // const [isLookingForJob, setLookingForJob] = useState<boolean | undefined>(
  //   undefined
  // );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormData({
      name: "",
      aboutMe: "",
      profession: "",
      isLookingForJob: false,
    });
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return { ...prev, name: e.target.value }; 
    });
  };
  const handleAboutMeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => {
      return { ...prev, aboutMe: e.target.value };
    });
  };
  const handleProfessionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => {
      return { ...prev, profession: e.target.value };
    });
  };
  const handleIsLookingForJobChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      isLookingForJob: e.target.checked,
    }));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            placeholder="Enter your name"
            id="name"
            value={formData.name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="aboutMe">About Me: </label>
          <textarea
            placeholder="About me"
            id="aboutMe"
            value={formData.aboutMe}
            onChange={handleAboutMeChange}
          />
        </div>
        <div>
          <label htmlFor="aboutMe">Profession: </label>
          <select
            id="aboutMe"
            onChange={handleProfessionChange}
            value={formData.profession}
          >
            {" "}
            .<option value="">Choose profession</option>
            <option value="Web-developer">Web developer</option>
            <option value="Software-Engineer">Software Engineer</option>
            <option value="Data-Analyst">Data Analyst</option>
          </select>
        </div>
        <div>
          <input
            type="checkbox"
            id="job"
            checked={formData.isLookingForJob}
            onChange={handleIsLookingForJobChange}
          />
          <label htmlFor="job">Looking for a job: </label>
        </div>

        <button type="submit">Submit</button>
      </form>

      <p>{formData.name}</p>
      <p>{formData.aboutMe}</p>
      <p>{formData.profession}</p>
      <p>
        {formData.isLookingForJob === undefined
          ? ""
          : formData.isLookingForJob
          ? "Looking for a job"
          : "Not looking for a job"}
      </p>
    </>
  );
};
