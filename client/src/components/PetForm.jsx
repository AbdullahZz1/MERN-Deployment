import './css/form.css';
const PetForm = (props) => {
    const { name, type, description, skill1, skill2, skill3, handleChange, handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div style={{ padding: "5px", border: "1px solid", display: "flex", flexDirection: "column", margin: "5px" }}>
                <label>Name:</label>
                <input name="name" value={name} onChange={handleChange} />
                <label>Type:</label>
                <input name="type" value={type} onChange={handleChange} />
                <label>Description:</label>
                <input name="description" value={description} onChange={handleChange} />
                <label> Skills (Optional) : </label>
                <label>Skill 1:</label>
                <input name="skill1" value={skill1} onChange={handleChange} />
                <label>Skill 2:</label>
                <input name="skill2" value={skill2} onChange={handleChange} />
                <label>Skill 3:</label>
                <input name="skill3" value={skill3} onChange={handleChange} />
            </div>
        </form>
    );
};

export default PetForm;
