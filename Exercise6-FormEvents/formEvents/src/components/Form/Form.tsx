import React, { useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [profession, setProfession] = useState<string>("");
  const [isLookingForJob, setLookingForJob] = useState<boolean | undefined>(
    undefined
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name,
      aboutMe,
      profession,
      isLookingForJob,
    };
    setName("");
    setAboutMe("");
    setProfession("");
    setLookingForJob(undefined);
    console.log(formData);
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="aboutMe">About Me: </label>
          <textarea
            placeholder="About me"
            id="aboutMe"
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="aboutMe">Profession: </label>
          <select
            id="aboutMe"
            onChange={(e) => setProfession(e.target.value)}
            value={profession}
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
            checked={isLookingForJob}
            onChange={(e) => setLookingForJob(e.target.checked)}
          />
          <label htmlFor="job">Looking for a job: </label>
        </div>

        <button type="submit">Submit</button>
      </form>

      <p>{name}</p>
      <p>{aboutMe}</p>
      <p>{profession}</p>
      <p>
        {isLookingForJob === undefined
          ? ""
          : isLookingForJob
          ? "Looking for a job"
          : "Not looking for a job"}
      </p>
    </>
  );
};
